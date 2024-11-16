/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Modal } from "../ui/modal";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../globals/custom-formfield";
import { FormFieldType } from "@/constants";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { AdvisingValidators } from "@/lib/validations";
import { getAllCourseTeacher } from "@/lib/server-actions/course-teacher";
import { toast } from "sonner";
import { useSaveAdvising } from "@/data/advising";

interface GroupedTeacher {
  teacherId: string;
  teacherName: string;
  courses: Array<{
    id: string;
    name: string;
    code: string;
  }>;
}

const AdvisingForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [teachers, setTeachers] = React.useState<GroupedTeacher[]>([]);
  const form = useForm<z.infer<typeof AdvisingValidators>>({
    resolver: zodResolver(AdvisingValidators),
    mode: "onChange",
    defaultValues: {
      teacherId: "",
      courseId: "",
      message: "",
    },
  });

  // Fetch teachers and group by teacherName
  React.useEffect(() => {
    const fetchTeachers = async () => {
      const response = await getAllCourseTeacher();
      if (response.data) {
        const groupedTeachers = response.data.reduce(
          (acc: Record<string, GroupedTeacher>, item: any) => {
            const teacher = item.teacher;
            const course = item.course;

            if (!teacher || !course) return acc;

            const teacherName = `${teacher.firstName} ${teacher.lastName}`;

            if (!acc[teacherName]) {
              acc[teacherName] = {
                teacherId: teacher.id,
                teacherName,
                courses: [],
              };
            }

            acc[teacherName].courses.push({
              id: course.id,
              name: course.name,
              code: course.code,
            });

            return acc;
          },
          {}
        );

        setTeachers(Object.values(groupedTeachers));
      } else {
        toast.error(response.error || "Error fetching teachers");
        console.error("Error fetching teachers");
      }
    };

    fetchTeachers();
  }, []);

  const { mutate: saveAdvising, isPending: isSaving } = useSaveAdvising();

  async function onSubmit(values: z.infer<typeof AdvisingValidators>) {
    saveAdvising(values, {
      onSuccess: () => {
        onClose();
        window.location.reload();
      },
    });
  }

  // Get selected teacher to filter courses
  const selectedTeacher = teachers.find(
    (teacher) => teacher.teacherId === form.watch("teacherId")
  );

  return (
    <Modal
      title="Send Message To Course Teacher"
      description="Use this form to send a message to a teacher for advising purposes."
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3.5">
            {/* Select Teacher */}
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              isRequired={true}
              placeholder="Select your teacher"
              disabled={isSaving}
              label="Professor"
              name="teacherId"
              dynamicOptions={teachers.map((teacher) => ({
                label: teacher.teacherName,
                value: teacher.teacherId,
              }))}
            />

            {/* Select Course */}
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              isRequired={true}
              placeholder="Select your course"
              disabled={isSaving}
              label="Course"
              name="courseId"
              dynamicOptions={
                selectedTeacher
                  ? selectedTeacher.courses.map((course) => ({
                      label: `${course.name} (${course.code})`,
                      value: course.id,
                    }))
                  : []
              }
            />

            {/* Message Field */}
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              placeholder="Enter your message here"
              label="Message"
              isRequired={true}
              disabled={isSaving}
              name="message"
            />
          </div>

          {/* Submit Button */}
          <Button
            className="w-full mt-4"
            disabled={isSaving}
            type="submit"
            size="sm"
          >
            {isSaving && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Submit Message
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AdvisingForm;
