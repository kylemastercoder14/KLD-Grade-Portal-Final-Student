/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createConsultation,
  getAllConsultations,
} from "@/lib/server-actions/consultation";
import { ConsultationValidators } from "@/lib/validations";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

export function useGetConsultation() {
  return useQuery({
    queryFn: async () => getAllConsultations(),
    queryKey: ["consultation"],
  });
}

export function useSaveConsultation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof ConsultationValidators>) => {
      return createConsultation(values);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["consultation"] });
      } else {
        toast.error(data.error || "An error occurred");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
