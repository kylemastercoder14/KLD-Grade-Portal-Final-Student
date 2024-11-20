"use client";

import ConsultForm from "@/components/forms/consult-form";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetConsultation } from "@/data/consultation";
import { useGetCourseTeacher } from "@/data/course-teacher";
import { Loader2, User } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const ConsultationClient = () => {
  const { data: courseTeacher, error, isLoading } = useGetCourseTeacher();
  const { data: consultation } = useGetConsultation();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTeacher, setSelectedTeacher] = React.useState<{
    id: string;
    name: string;
    course: string;
    courseId: string;
  } | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  const handleOpenModal = (teacher: {
    id: string;
    name: string;
    course: string;
    courseId: string;
  }) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const isConsultationExists = (teacherId: string, courseId: string) => {
    return consultation?.data?.some(
      (consult) => consult.teacherId === teacherId && consult.courseId === courseId
    );
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ConsultForm
        teacher={selectedTeacher}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="px-5 py-3">
        <Table>
          <TableCaption>
            A list of your enrolled courses this semester.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Section</TableHead>
              <TableHead>Course Title</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Professor</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </TableCell>
              </TableRow>
            ) : courseTeacher?.data && courseTeacher.data.length > 0 ? (
              courseTeacher?.data?.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.section.name}</TableCell>
                  <TableCell>
                    {course.course.name} ({course.course.code})
                  </TableCell>
                  <TableCell>{course.course.unit}</TableCell>
                  <TableCell>
                    Inst. {course.teacher.firstName} {course.teacher.lastName}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        handleOpenModal({
                          id: course.teacher.id,
                          name: `${course.teacher.firstName} ${course.teacher.lastName}`,
                          course: course.course.name,
                          courseId: course.course.id,
                        })
                      }
                      disabled={isConsultationExists(course.teacherId, course.courseId)}
                    >
                      <User className="mr-2 w-4 h-4" />
                      Consult
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ConsultationClient;
