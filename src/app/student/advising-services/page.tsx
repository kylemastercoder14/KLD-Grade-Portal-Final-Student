import { CalendarDays, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import AdvisingServicesClient from "./_components/client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllAdvising } from "@/lib/server-actions/advising";

const AdvisingServices = async () => {
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["advising"],
    queryFn: getAllAdvising,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CalendarDays size={40} className="text-primary" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">Advised Subjects</p>
            <p className="text-sm text-muted-foreground">
              These are the advised subjects to you for academic year 2024-2025
              1ST SEMESTER
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">Kyle Andre Lim</span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 mt-5 px-5 py-3">
        <HydrationBoundary state={dehydratedState}>
          <AdvisingServicesClient />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default AdvisingServices;
