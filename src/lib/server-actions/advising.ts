/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { z } from "zod";
import { AdvisingValidators } from "../validations";
import { useUser } from "@/hooks/use-user";
import db from "../db";

export const getAllAdvising = async () => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to get all advising" };
  }
  try {
    const data = await db.advising.findMany({
      where: {
        studentNumber: student.studentNumber,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        student: true,
        teacher: true,
        course: true,
      },
    });

    if (!data) {
      return { error: "No advising found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};

export const createAdvising = async (
  values: z.infer<typeof AdvisingValidators>
) => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to submit a message" };
  }

  const validatedField = AdvisingValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { teacherId, message, courseId } = validatedField.data;

  try {
    const existingAdvising = await db.advising.findFirst({
      where: {
        studentNumber: student.studentNumber,
        courseId,
        teacherId,
      },
    });

    if (existingAdvising) {
      return {
        error:
          "You have already submitted a message for this course and teacher",
      };
    }

    const advising = await db.advising.create({
      data: {
        teacherId,
        message,
        courseId,
        studentNumber: student.studentNumber,
      },
    });

    return { success: "Message submitted successfully", advising };
  } catch (error: any) {
    return {
      error: `Failed to submit advising. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
