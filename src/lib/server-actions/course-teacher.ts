/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { useUser } from "@/hooks/use-user";
import db from "../db";

export const getAllCourseTeacher = async () => {
  const { student } = await useUser();
  if (!student) {
    return { error: "No user found." };
  }
  try {
    const data = await db.assignCourseTeacher.findMany({
      where: {
        section: {
          name: student.sections.name,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        course: true,
        teacher: true,
        section: true,
      }
    });

    if (!data) {
      return { error: "No course teacher found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
