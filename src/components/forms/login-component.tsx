"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginValidators } from "@/lib/validations";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { Button } from "../ui/button";
import { FormFieldType } from "@/constants";
import { loginStudent } from "@/lib/server-actions/login";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const LoginComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof LoginValidators>>({
    resolver: zodResolver(LoginValidators),
    defaultValues: {
      studentNumber: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginValidators>) {
    setLoading(true);
    try {
      const response = await loginStudent(
        values.studentNumber,
        values.password
      );
      if (response.error) {
        toast.error(response.error);
      } else {
        window.location.href = "/verify";
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          isRequired
          disabled={loading}
          label="Student Number"
          placeholder="KLD-XX-XXXXXX"
          name="studentNumber"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          isRequired
          disabled={loading}
          type="password"
          label="Password"
          placeholder="--------"
          name="password"
        />
        <Button disabled={loading} className="w-full mt-2" type="submit">
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginComponent;
