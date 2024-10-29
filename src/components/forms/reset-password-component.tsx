"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ResetPasswordValidators } from "@/lib/validations";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { Button } from "../ui/button";
import { FormFieldType } from "@/lib/constants";

const ResetPasswordComponent = () => {
  const form = useForm<z.infer<typeof ResetPasswordValidators>>({
    resolver: zodResolver(ResetPasswordValidators),
    defaultValues: {
      studentNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof ResetPasswordValidators>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          isRequired
          label="Student Number"
          placeholder="KLD-XX-XXXXXX"
          name="studentNumber"
        />
        <Button className="w-full mt-2" type="submit">Reset</Button>
      </form>
    </Form>
  );
};

export default ResetPasswordComponent;