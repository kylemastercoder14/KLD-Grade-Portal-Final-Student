import React from "react";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DocumentValidators } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { FormFieldType } from "@/constants";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useRequestDocument } from "@/data/document";

const RequestDocument = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const form = useForm<z.infer<typeof DocumentValidators>>({
    resolver: zodResolver(DocumentValidators),
    mode: "onChange",
    defaultValues: {
      typeDocument: "",
      purpose: "",
    },
  });

  const { mutate: saveDocument, isPending: isSaving } = useRequestDocument();

  async function onSubmit(values: z.infer<typeof DocumentValidators>) {
    saveDocument(values, {
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
      title="Document Request Form"
      description="Easily request important documents such as Certificate of Registration (COR), Transcript of Records (TOR), Certificate of Grades (COG), and more"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3.5">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              placeholder="Select type of document"
              label="Type of Document"
              isRequired={true}
              dynamicOptions={[
                { label: "Certificate of Registration (COR)", value: "COR" },
                { label: "Transcript of Records (TOR)", value: "TOR" },
                { label: "Certificate of Grades (COG)", value: "COG" },
                { label: "Certification of Enrollment (COE)", value: "COE" },
              ]}
              name="typeDocument"
              disabled={isSaving}
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              label="Purpose"
              placeholder="Enter the purpose of your request"
              isRequired={true}
              name="purpose"
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
            Submit Requested Document
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default RequestDocument;
