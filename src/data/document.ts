/* eslint-disable @typescript-eslint/no-explicit-any */

import { requestDocument } from "@/lib/server-actions/document";
import { DocumentValidators } from "@/lib/validations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

export function useRequestDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof DocumentValidators>) => {
      return requestDocument(values);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["documents"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
