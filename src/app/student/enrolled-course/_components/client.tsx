"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCourseTeacher } from "@/data/course-teacher";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const EnrolledCourseClient = () => {
  const { data: courseTeacher, error, isLoading } = useGetCourseTeacher();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-5 py-3">
      <Table>
        <TableCaption>
          A list of your enrolled courses this semester.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Course Title</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Pre-requisite</TableHead>
            <TableHead>Professor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </TableCell>
            </TableRow>
          ) : courseTeacher?.data && courseTeacher.data.length > 0 ? (
            courseTeacher?.data?.map((course) => (
              <TableRow key={course.id}>
                <TableCell>
                  {course.course.name} ({course.course.code})
                </TableCell>
                <TableCell>{course.course.unit}</TableCell>
                <TableCell>{course.course.prerequisite || "N/A"}</TableCell>
                <TableCell>
                  Inst. {course.teacher.firstName} {course.teacher.lastName}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No enrolled courses found yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnrolledCourseClient;
