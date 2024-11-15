/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import db from "../db";

export const getAllCourse = async () => {
  try {
    const data = await db.courses.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!data) {
      return { error: "No courses found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
