import { getAllAnnouncements } from "@/lib/server-actions/announcement";
import { useQuery } from "@tanstack/react-query";

export function useGetAnnouncement() {
    return useQuery({
      queryFn: async () => getAllAnnouncements(),
      queryKey: ["announcements"],
    });
  }