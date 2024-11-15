import { getAllCourse } from "@/lib/server-actions/course";
import { useQuery } from "@tanstack/react-query";

export function useGetCourse() {
  return useQuery({
    queryFn: async () => getAllCourse(),
    queryKey: ["courses"],
  });
}
