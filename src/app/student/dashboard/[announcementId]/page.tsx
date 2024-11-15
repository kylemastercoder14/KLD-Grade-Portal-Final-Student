import { useUser } from "@/hooks/use-user";
import db from "@/lib/db";
import { format } from "date-fns";
import { Calendar, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnnouncementPage = async ({
  params,
}: {
  params: { announcementId: string };
}) => {
  const { student } = await useUser();
  const semester = await db.semester.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  const data = await db.announcement.findFirst({
    where: {
      id: params.announcementId,
    },
  });
  return (
    <div className="max-w-7xl mx-auto mt-5 pb-10">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Home size={40} className="text-primary" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">Grade Portal</p>
            <p className="text-sm text-muted-foreground">
              {semester?.year} / {semester?.name} / {student?.programs.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/student/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">{data?.name}</span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 mt-3">
        <p className="text-lg font-semibold">
          Announcement from Registrar&apos;s Office: {data?.name}
        </p>
        <div className="flex items-center gap-2 text-primary mt-1">
          <Calendar className="w-4 h-4" />
          <p className="text-sm">
            {format(data?.createdAt ?? new Date(), "MMMM dd, yyyy - h:mm a")}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {data?.description}
        </p>
        <div className="relative w-full h-screen mt-2">
          <Image
            src={data?.image ?? ""}
            alt="Image"
            fill
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
