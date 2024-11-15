/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { useUser } from "@/hooks/use-user";
import db from "@/lib/db";
import { z } from "zod";
import { DocumentValidators } from "../validations";

export const requestDocument = async (
  values: z.infer<typeof DocumentValidators>
) => {
  const { student } = await useUser();
  if (!student) {
    return { error: "You must be logged in to request a document" };
  }

  const validatedField = DocumentValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { typeDocument, purpose } = validatedField.data;

  try {
    const document = await db.documentRequest.create({
      data: {
        purpose,
        typeDocument,
        studentNumber: student.studentNumber
      },
    });

    return { success: "Document requested successfully", document };
  } catch (error: any) {
    return {
      error: `Failed to request document. Please try again. ${
        error.message || ""
      }`,
    };
  }
};