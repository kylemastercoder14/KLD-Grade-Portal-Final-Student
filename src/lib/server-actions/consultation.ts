/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { z } from "zod";
import { ConsultationValidators } from "../validations";
import { useUser } from "@/hooks/use-user";
import db from "../db";

export const getAllConsultations = async () => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to get all consultation" };
  }
  try {
    const data = await db.consultation.findMany({
      where: {
        studentNumber: student.studentNumber,
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        student: true,
        teacher: true,
        course: true,
      }
    });

    if (!data) {
      return { error: "No consultations found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};

export const createConsultation = async (
  values: z.infer<typeof ConsultationValidators>
) => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to submit a consultation" };
  }

  const validatedField = ConsultationValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { teacherId, comment, concern, courseId } = validatedField.data;

  try {
    const existingConsultation = await db.consultation.findFirst({
      where: {
        studentNumber: student.studentNumber,
        courseId,
        teacherId,
      },
    });

    if (existingConsultation) {
      return {
        error: "You have already submitted a consultation for this course",
      };
    }

    const consultation = await db.consultation.create({
      data: {
        teacherId,
        comment,
        courseId,
        concern,
        studentNumber: student.studentNumber,
      },
    });

    return { success: "Consultation submitted successfully", consultation };
  } catch (error: any) {
    return {
      error: `Failed to submit consultation. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
