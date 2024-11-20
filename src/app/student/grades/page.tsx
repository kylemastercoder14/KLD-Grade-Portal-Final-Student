import { FileChartColumn, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import GradeClient from "./_components/client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllGrades } from "@/lib/server-actions/grades";
import { useUser } from "@/hooks/use-user";

const Grades = async () => {
  const { student } = await useUser();
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["grades"],
    queryFn: getAllGrades,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="md:max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex md:flex-row gap-3 flex-col md:items-center items-start md:justify-between">
        <div className="flex items-center gap-3">
          <FileChartColumn size={40} className="text-primary md:block hidden" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">eCOG</p>
            <p className="text-sm text-muted-foreground">
              These are your current and previously enrolled subjects.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">{student?.firstName} {student?.lastName}</span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 mt-5">
        <HydrationBoundary state={dehydratedState}>
          <GradeClient />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Grades;
