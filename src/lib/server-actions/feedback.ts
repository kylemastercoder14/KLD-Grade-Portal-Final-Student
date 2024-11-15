/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { useUser } from "@/hooks/use-user";
import db from "@/lib/db";
import { z } from "zod";
import { FeedbackValidators } from "../validations";

export const createFeedback = async (
  values: z.infer<typeof FeedbackValidators>
) => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to submit a feedback" };
  }

  const validatedField = FeedbackValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { feedback, comment } = validatedField.data;

  try {
    const feedbacks = await db.feedback.create({
      data: {
        name: student.firstName + " " + student.lastName,
        feedback,
        comment: comment || "",
      },
    });

    return { success: "Feedback submitted successfully", feedbacks };
  } catch (error: any) {
    return {
      error: `Failed to submit feedback. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
