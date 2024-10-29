"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginValidators } from "@/lib/validations";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { Button } from "../ui/button";
import { FormFieldType } from "@/lib/constants";

const LoginComponent = () => {
  const form = useForm<z.infer<typeof LoginValidators>>({
    resolver: zodResolver(LoginValidators),
    defaultValues: {
      studentNumber: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginValidators>) {
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
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          isRequired
          type="password"
          label="Password"
          placeholder="--------"
          name="password"
        />
        <Button className="w-full mt-2" type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginComponent;