/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import db from "@/lib/db";
import * as jose from "jose";
import { cookies } from "next/headers";
import bcryptjs from "bcryptjs";
import { ResetEmailHTML } from "@/components/globals/reset-email";
import nodemailer from "nodemailer";
import { z } from "zod";
import { NewPasswordValidators } from "../validations";

export const loginStudent = async (studentNumber: string, password: string) => {
  if (!studentNumber || !password) {
    return { error: "Student number and password are required" };
  }

  try {
    const student = await db.students.findFirst({
      where: {
        studentNumber,
      },
    });

    if (!student) {
      return { error: "Student not found" };
    }

    const validPassword = await bcryptjs.compare(password, student.password);

    if (!validPassword) {
      return { error: "Invalid password" };
    }

    // Create JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg })
      .setExpirationTime("72h")
      .setSubject(student.id.toString())
      .sign(secret);

    // Set the cookie with the JWT
    cookies().set("Authorization", jwt, {
      httpOnly: true, // Set to true for security
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 60 * 60 * 24 * 3, // Cookie expiration (3 days in seconds)
      sameSite: "strict", // Adjust according to your needs
      path: "/", // Adjust path as needed
    });

    return { token: jwt };
  } catch (error: any) {
    return {
      error: `Failed to sign in. Please try again. ${error.message || ""}`,
    };
  }
};

export const logout = async () => {
  cookies().set("Authorization", "", { maxAge: 0, path: "/" });
};

export const sendResetEmail = async (
  name: string,
  email: string,
  studentId: string
) => {
  const htmlContent = await ResetEmailHTML({
    studentId: studentId,
    name: name,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kylemastercoder14@gmail.com",
      pass: "nyqdxtgnqtzxmtyx",
    },
  });

  const message = {
    from: "kylemastercoder14@gmail.com",
    to: email,
    subject: "Kolehiyo ng Lungsod ng Dasmariñas",
    text: `Notification from Kolehiyo ng Lungsod ng Dasmariñas - Grade Portal`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(message);
    return { success: true };
  } catch (error) {
    console.error("Error sending notification", error);
    return { message: "An error occurred. Please try again." };
  }
};

export const resetPassword = async (email: string) => {
  if (!email) {
    return { error: "KLD Email is required" };
  }

  try {
    const student = await db.students.findFirst({
      where: {
        email,
      },
    });

    if (!student) {
      return { error: "Student not found" };
    }

    const fullName = student.firstName + " " + student.lastName;

    await sendResetEmail(fullName, student.email, student.id);

    return {
      success:
        "A password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password.",
    };
  } catch (error: any) {
    return {
      error: `Failed to reset password. Please try again. ${
        error.message || ""
      }`,
    };
  }
};

export const updateNewPassword = async (
  values: z.infer<typeof NewPasswordValidators>,
  studentId: string
) => {
  if (!studentId) {
    return { error: "Student ID is required" };
  }

  const validatedField = NewPasswordValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { password, confirmPassword } = validatedField.data;

  if(password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    const student = await db.students.update({
      data: {
        password: hashedPassword,
      },
      where: {
        id: studentId,
      },
    });

    return { success: "Password updated successfully", student };
  } catch (error: any) {
    return {
      error: `Failed to update password. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
