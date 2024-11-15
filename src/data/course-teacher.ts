import { getAllCourseTeacher } from "@/lib/server-actions/course-teacher";
import { useQuery } from "@tanstack/react-query";

export function useGetCourseTeacher() {
  return useQuery({
    queryFn: async () => getAllCourseTeacher(),
    queryKey: ["assignCourseTeacher"],
  });
}
