/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAdvising, getAllAdvising } from "@/lib/server-actions/advising";
import { AdvisingValidators } from "@/lib/validations";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

export function useGetAdvising() {
  return useQuery({
    queryFn: async () => getAllAdvising(),
    queryKey: ["advising"],
  });
}

export function useSaveAdvising() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof AdvisingValidators>) => {
      return createAdvising(values);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["advising"] });
      } else {
        toast.error(data.error || "An error occurred");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
