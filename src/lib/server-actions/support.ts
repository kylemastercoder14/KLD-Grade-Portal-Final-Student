/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { useUser } from "@/hooks/use-user";
import db from "@/lib/db";
import { z } from "zod";
import { SupportValidators } from "../validations";
import nodemailer from "nodemailer";
import { NotifyEmailHTML } from "@/components/globals/support-notify-email";

export const sendEmail = async (name: string, email: string) => {
  const htmlContent = await NotifyEmailHTML({
    date: new Date(),
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

export const createSupport = async (
  values: z.infer<typeof SupportValidators>
) => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to create a support ticket" };
  }

  const validatedField = SupportValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { concern, attachment } = validatedField.data;

  try {
    const fullName = student.firstName + " " + student.lastName;
    const support = await db.support.create({
      data: {
        name: fullName,
        email: student.email,
        concerns: concern,
        attachment,
      },
    });

    await sendEmail(fullName, student.email);

    return { success: "Ticket submitted successfully", support };
  } catch (error: any) {
    return {
      error: `Failed to submit ticket. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
