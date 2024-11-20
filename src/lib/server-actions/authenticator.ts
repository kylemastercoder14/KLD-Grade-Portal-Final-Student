/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { generateTOTPSecret } from "@/functions/generate-otp-secret";
import { generateQRCode } from "@/functions/generate-qr-code";
import { useUser } from "@/hooks/use-user";
import speakeasy from "speakeasy";
import db from "../db";

export const authenticate = async () => {
  const { student } = await useUser();
  if (!student?.studentNumber) {
    return { error: "Student number is required" };
  }

  let studentData = await db.students.findUnique({
    where: { studentNumber: student.studentNumber },
  });

  if (!studentData || !studentData.otpSecret) {
    // Generate OTP secret and QR code if not already created
    const secret = generateTOTPSecret(student.studentNumber);
    const qrcode = secret.otpauth_url
      ? await generateQRCode(secret.otpauth_url)
      : null;

    // Save to database
    studentData = await db.students.update({
      where: { studentNumber: student.studentNumber },
      data: {
        otpSecret: secret.base32,
        otpQrCode: qrcode, // Save the QR code URL
      },
    });
  }

  return {
    secret: studentData.otpSecret,
    qrcode: studentData.otpQrCode,
    student: student.studentNumber,
  };
};

export const verifyAuthentication = async (token: string) => {
  const { student } = await useUser();
  if (!token) {
    return { error: "Token is required", verified: false };
  }

  const secret = student?.otpSecret;
  if (!secret) {
    return { error: "OTP secret not found", verified: false };
  }

  const verify = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 1,
  });

  if (!verify) {
    return { error: "Invalid token", verified: false };
  }

  await db.students.update({
    data: {
      isAuthenticate: true,
    },
    where: {
      studentNumber: student?.studentNumber,
    },
  });

  return { verified: true };
};

export const isStudentAuthenticated = async (studentNumber: string) => {
  const student = await db.students.findUnique({
    where: { studentNumber },
  });

  return student?.isAuthenticate;
};
