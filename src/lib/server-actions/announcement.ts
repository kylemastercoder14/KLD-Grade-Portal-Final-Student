"use server";

import db from "../db";

export const getAllAnnouncements = async () => {
  try {
    const data = await db.announcement.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!data) {
      return { error: "No announcements found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
