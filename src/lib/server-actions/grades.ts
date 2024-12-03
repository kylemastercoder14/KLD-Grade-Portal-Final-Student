/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { useUser } from "@/hooks/use-user";
import db from "../db";

export const getAllGrades = async () => {
  const { student } = await useUser();
  if (!student) {
    return { error: "Student not found." };
  }
  try {
    const data = await db.grades.findMany({
      where: {
        studentNumber: student.studentNumber,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!data) {
      return { error: "No grades found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
