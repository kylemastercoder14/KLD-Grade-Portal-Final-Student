import { FileChartColumn, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import GradeClient from "./_components/client";

const Grades = async () => {
  //   const queryClient = new QueryClient();

  // Prefetch the data from the server
  //   await queryClient.prefetchQuery({
  //     queryKey: ["announcements"],
  //     queryFn: getAllAnnouncements,
  //   });

  // Hydrate the query data for the client
  //   const dehydratedState = dehydrate(queryClient);
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileChartColumn size={40} className="text-primary" />
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
          <span className="text-sm text-primary">Kyle Andre Lim</span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 mt-5">
        <GradeClient />
        {/* <HydrationBoundary state={dehydratedState}>
          
        </HydrationBoundary> */}
      </div>
    </div>
  );
};

export default Grades;
