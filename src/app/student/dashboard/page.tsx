import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllAnnouncements } from "@/lib/server-actions/announcement";
import AnnouncementClient from "./_components/client";
import { useUser } from "@/hooks/use-user";
import db from "@/lib/db";

const Dashboard = async () => {
  const { student } = await useUser();
  const semester = await db.semester.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["announcements"],
    queryFn: getAllAnnouncements,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="md:max-w-7xl w-full mx-auto mt-5">
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
          <span className="text-sm text-primary">{student?.firstName} {student?.lastName}</span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 mt-5">
        <p className="text-2xl font-semibold">Announcement</p>
        <p className="text-sm text-muted-foreground">
          Hi Kyle Andre Lim, kindly read about some of the important
          announcement below.
        </p>
        <HydrationBoundary state={dehydratedState}>
          <AnnouncementClient />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Dashboard;
