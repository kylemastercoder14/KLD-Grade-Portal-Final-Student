"use server";

import bcrypt from "bcryptjs";
import db from "../db";
import * as jose from "jose";

export const signUpUser = async (email: string, password: string) => {
  // read data
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  // write data
  await db.students.create({
    data: {
      firstName: "Kyle Andre",
      middleName: "David",
      lastName: "Lim",
      birthDate: "January 14, 2000",
      age: "24",
      gender: "Male",
      civilStatus: "Single",
      phoneNumber: "09123456789",
      province: "Cavite",
      city: "Dasmarinas",
      barangay: "Santa Lucia",
      houseNumber: "Blk 1 Lot 2",
      zipCode: "4114",
      email,
      password: hashedPassword,
      elementarySchool: "St. Francis of Assisi College",
      highSchool: "St. Francis of Assisi College",
      //   yearLevelId: "4th year",
      //   programId: "BSIT",
      //   sectionId: "405",
    },
  });

  return Response.json({});
};

export const signinUser = async (email: string, password: string) => {
  // read data
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // write data
  const user = await db.students.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isCorrectPassword = bcrypt.compareSync(password, user.password);

  if (!isCorrectPassword) {
    throw new Error("Invalid password");
  }

  //   create jwt token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id.toString())
    .sign(secret);

  return { token: jwt };
};
