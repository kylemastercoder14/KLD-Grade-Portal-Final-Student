import { getAllGrades } from "@/lib/server-actions/grades";
import { useQuery } from "@tanstack/react-query";

export function useGetGrades() {
  return useQuery({
    queryFn: async () => getAllGrades(),
    queryKey: ["grades"],
  });
}
