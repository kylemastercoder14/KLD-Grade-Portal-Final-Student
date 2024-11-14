/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import db from "@/lib/db";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { useUser } from "@/hooks/use-user";
import { StudentValidators } from "../validations";

export const changeProfileImage = async (image: string) => {
  const { studentId } = await useUser();
  if (!studentId) {
    return { error: "Student ID is required." };
  }

  try {
    const response = await db.students.update({
      data: {
        profileImage: image,
      },
      where: {
        id: studentId,
      },
    });

    return { success: "Profile image updated successfully", response };
  } catch (error: any) {
    return {
      error: `Failed to update profile image. Please try again. ${
        error.message || ""
      }`,
    };
  }
};

export const deleteProfileImage = async () => {
  const { studentId } = await useUser();
  if (!studentId) {
    return { error: "Student ID is required." };
  }

  try {
    // Update database to remove profile image
    const response = await db.students.update({
      data: {
        profileImage: "",
      },
      where: {
        id: studentId,
      },
    });

    return { success: "Profile image deleted successfully", response };
  } catch (error: any) {
    return {
      error: `Failed to delete profile image. Please try again. ${
        error.message || ""
      }`,
    };
  }
};

export const updateStudent = async (
  values: z.infer<typeof StudentValidators>,
  studentId: string
) => {
  if (!studentId) {
    return { error: "Student ID is required." };
  }

  const validatedField = StudentValidators.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const {
    studentNumber,
    firstName,
    middleName,
    lastName,
    extensionName,
    age,
    barangay,
    birthDate,
    maritalStatus,
    email,
    gender,
    houseNumber,
    municipality,
    phoneNumber,
    province,
    region,
    elementarySchool,
    highSchool,
    zipCode,
    profileImage,
    confirmPassword,
    password,
  } = validatedField.data;

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    const student = await db.students.update({
      data: {
        studentNumber,
        firstName,
        middleName,
        lastName,
        extensionName,
        age,
        barangay,
        birthDate,
        civilStatus: maritalStatus,
        email,
        gender,
        houseNumber,
        city: municipality,
        phoneNumber,
        province,
        region,
        zipCode,
        profileImage,
        elementarySchool,
        highSchool,
        password: hashedPassword,
      },
      where: {
        id: studentId,
      },
    });
    return { success: "Account updated successfully", student };
  } catch (error: any) {
    return {
      error: `Failed to update account. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
