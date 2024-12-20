import { z } from "zod";

export const LoginValidators = z.object({
  studentNumber: z.string().min(1, { message: "Student number is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const AuthenticateValidators = z.object({
  email: z
    .string()
    .min(1, { message: "KLD email is required" })
    .email({ message: "Invalid email address" })
    .regex(/^[\w.-]+@kld\.edu\.ph$/, {
      message: "Email must be in the format: jdelacruz@kld.edu.ph",
    }),
});

export const ResetPasswordValidators = z.object({
  email: z
    .string()
    .min(1, { message: "KLD email is required" })
    .email({ message: "Invalid email address" })
    .regex(/^[\w.-]+@kld\.edu\.ph$/, {
      message: "Email must be in the format: jdelacruz@kld.edu.ph",
    }),
});

export const NewPasswordValidators = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Attach error to the confirmPassword field
  });

export const StudentValidators = z
  .object({
    studentNumber: z.string().min(1, { message: "Student number is required" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last name is required" }),
    extensionName: z.string().optional(),
    birthDate: z.string().min(1, { message: "Birth date is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    maritalStatus: z.string().min(1, { message: "Marital status is required" }),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }),
    region: z.string().min(1, { message: "Region is required" }),
    province: z.string().min(1, { message: "Province is required" }),
    municipality: z.string().min(1, { message: "Municipality is required" }),
    barangay: z.string().min(1, { message: "Barangay is required" }),
    houseNumber: z.string().min(1, { message: "House number is required" }),
    zipCode: z.string().min(1, { message: "Zip code is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .regex(/^[\w.-]+@kld\.edu\.ph$/, {
        message: "Email must be in the format: jdelacruz@kld.edu.ph",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    profileImage: z.string().optional(),

    // Education
    elementarySchool: z
      .string()
      .min(1, { message: "Elementary school is required" }),
    highSchool: z.string().min(1, { message: "High school is required" }),

    // Relationships
    yearLevel: z.string().min(1, { message: "Year level is required" }),
    program: z.string().min(1, { message: "Program is required" }),
    section: z.string().min(1, { message: "Section is required" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This specifies which field the error should appear on
  });

export const DocumentValidators = z.object({
  typeDocument: z.string().min(1, { message: "Type of document is required" }),
  purpose: z.string().min(1, { message: "Purpose is required" }),
});

export const ConsultationValidators = z.object({
  teacher: z.string().min(1, { message: "Teacher is required" }),
  courseId: z.string().min(1, { message: "Course ID is required" }),
  teacherId: z.string().min(1, { message: "Teacher ID is required" }),
  concern: z.string().min(1, { message: "Concern is required" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});

export const FeedbackValidators = z.object({
  feedback: z.string().min(1, { message: "Feedback is required" }),
  comment: z.string().optional(),
});

export const SupportValidators = z.object({
  concern: z.string().min(1, { message: "Concern is required" }),
  attachment: z.string().min(1, { message: "Attachment is required" }),
});

export const AdvisingValidators = z.object({
  teacherId: z.string().min(1, { message: "Teacher is required" }),
  courseId: z.string().min(1, { message: "Course is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
