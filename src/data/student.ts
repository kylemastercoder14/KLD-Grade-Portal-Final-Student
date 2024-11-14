/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { StudentValidators } from "../lib/validations";
import { updateStudent } from "@/lib/server-actions/account";


export function useSaveStudent(initialData?: any) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof StudentValidators>) => {
      if (initialData) {
        // Update the student
        return updateStudent(values, initialData.id);
      }
    },
    onSuccess: (data) => {
      if (data && data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["students"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}