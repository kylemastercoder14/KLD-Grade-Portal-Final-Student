import { Home, MonitorDot } from "lucide-react";
import Link from "next/link";
import React from "react";
import ConsultationClient from "./_components/client";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/hooks/use-user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllCourseTeacher } from "@/lib/server-actions/course-teacher";

const Consultation = async () => {
  const { student } = await useUser();
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["assignCourseTeacher"],
    queryFn: getAllCourseTeacher,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MonitorDot size={40} className="text-primary" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">Consult My Professor</p>
            <p className="text-sm text-muted-foreground">
              You can consult your professor here.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">
            {student?.firstName} {student?.lastName}
          </span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 mt-5">
        <p className="px-5 py-3 text-xl font-semibold">
          Enrolled Courses this Semester
        </p>
        <Separator />
        <HydrationBoundary state={dehydratedState}>
          <ConsultationClient />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Consultation;
