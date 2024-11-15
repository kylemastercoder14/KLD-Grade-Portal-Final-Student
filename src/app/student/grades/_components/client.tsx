"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCourse } from "@/data/course";
import { useGetGrades } from "@/data/grades";
import { Courses } from "@prisma/client";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const GradeClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const {
    data: gradesData,
    error: gradesError,
    isLoading: gradesLoading,
  } = useGetGrades();
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
  } = useGetCourse();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (gradesError || courseError) {
      toast.error(
        gradesError?.message || courseError?.message || "An error occurred"
      );
    }
  }, [gradesError, courseError]);

  if (!isMounted) {
    return null;
  }

  const getCourseDetails = (courseCode: string): Partial<Courses> => {
    return courseData?.data?.find((course) => course.code === courseCode) || {};
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Academic Year</TableHead>
          <TableHead>Semester</TableHead>
          <TableHead>Course Title</TableHead>
          <TableHead>Units</TableHead>
          <TableHead>Final</TableHead>
          <TableHead>Remarks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gradesLoading || courseLoading ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              <Loader2 className="w-4 h-4 animate-spin" />
            </TableCell>
          </TableRow>
        ) : (
          gradesData?.data?.map((grade) => {
            const course = getCourseDetails(grade.courseCode);
            return (
              <TableRow key={grade.id}>
                <TableCell>2024-2025</TableCell>
                <TableCell>1ST SEMESTER</TableCell>
                <TableCell>
                  {course.name || "N/A"} ({course.code})
                </TableCell>
                <TableCell>{course.unit || "N/A"}</TableCell>
                <TableCell>{grade.grade.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`font-semibold ${
                      grade.remarks === "PASSED"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {grade.remarks}
                  </span>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default GradeClient;
