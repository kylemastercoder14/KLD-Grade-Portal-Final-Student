import React from "react";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConsultationValidators } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { FormFieldType } from "@/constants";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useSaveConsultation } from "@/data/consultation";

const ConsultForm = ({
  isOpen,
  onClose,
  teacher,
}: {
  isOpen: boolean;
  onClose: () => void;
  teacher: {
    id: string;
    name: string;
    course: string;
    courseId: string;
  } | null;
}) => {
  const form = useForm<z.infer<typeof ConsultationValidators>>({
    resolver: zodResolver(ConsultationValidators),
    mode: "onChange",
    defaultValues: {
      teacher: "",
      teacherId: "",
      courseId: "",
      concern: "",
      comment: "",
    },
  });

  const { mutate: saveConsultation, isPending: isSaving } =
    useSaveConsultation();

  React.useEffect(() => {
    if (teacher && isOpen) {
      form.setValue("teacher", teacher.name);
      form.setValue("teacherId", teacher.id);
      form.setValue("courseId", teacher.courseId);
    }
  }, [teacher, isOpen, form]);

  async function onSubmit(values: z.infer<typeof ConsultationValidators>) {
    saveConsultation(values, {
      onSuccess: () => {
        onClose();
        window.location.reload();
      },
    });
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={teacher?.course || "No Course Available"}
      description="Provide the details of your concern, including the professor's name, the type of issue, and additional comments to ensure we address your needs effectively."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3.5">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Professor"
              placeholder="Enter your professor's name"
              isRequired={true}
              name="teacher"
              disabled
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Professor"
              className="hidden"
              placeholder="Enter your professor's name"
              isRequired={true}
              name="teacherId"
              disabled
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Course"
              className="hidden"
              placeholder="Enter your professor's name"
              isRequired={true}
              name="courseId"
              disabled
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              placeholder="Select type of concern"
              label="Concern"
              isRequired={true}
              dynamicOptions={[
                { label: "Activity", value: "Activity" },
                { label: "Attendance", value: "Attendance" },
                { label: "Assignment", value: "Assignment" },
                { label: "Grade", value: "Grade" },
                { label: "Project", value: "Project" },
                { label: "Quiz", value: "Quiz" },
                { label: "Other", value: "Other" },
              ]}
              name="concern"
              disabled={isSaving}
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              label="Comment"
              placeholder="Enter the details of your concern"
              isRequired={true}
              name="comment"
              disabled={isSaving}
            />
          </div>
          <Button
            className="w-full mt-4"
            type="submit"
            disabled={isSaving}
            size="sm"
          >
            {isSaving && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Submit Consultation
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default ConsultForm;
