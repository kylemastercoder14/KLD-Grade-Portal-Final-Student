"use client";

import { useGetAnnouncement } from "@/data/announcement";
import { Announcement } from "@prisma/client";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const AnnouncementClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { data: announcementData, error, isLoading } = useGetAnnouncement();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
      console.log(error);
    } else {
      console.log(announcementData);
    }
  }, [announcementData, error]);

  const formattedData: Announcement[] =
    announcementData?.data?.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description ?? "N/A",
      image: item.image ?? "N/A",
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    })) || [];

  if (!isMounted) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center flex-col">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      {formattedData.length === 0 ? (
        <p className="border rounded-md text-muted-foreground font-semibold text-center px-3 py-3 mt-3">
          No announcement available
        </p>
      ) : (
        formattedData.map((announcement) => (
          <div
            key={announcement.id}
            className="border rounded-md px-3 py-3 mt-3"
          >
            <Link
              href={`/student/dashboard/${announcement.id}`}
              className="text-xl font-semibold underline"
            >
              {announcement.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              Posted last{" "}
              {format(
                new Date(announcement.createdAt),
                "MMMM dd, yyyy - h:mm a"
              )}{" "}
              from Registrar&apos;s Office
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AnnouncementClient;
