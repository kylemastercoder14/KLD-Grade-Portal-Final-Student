import { FileText, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { useUser } from "@/hooks/use-user";
import { getAllRequestedDocuments } from "@/lib/server-actions/document";
import RequestedDocumentsClient from "./_components/client";

const RequestedDocuments = async () => {
  const { student } = await useUser();
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["documents"],
    queryFn: getAllRequestedDocuments,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="md:max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex md:flex-row gap-3 flex-col md:items-center items-start md:justify-between">
        <div className="flex items-center gap-3">
          <FileText size={40} className="text-primary md:block hidden" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">Requested Documents Record</p>
            <p className="text-sm text-muted-foreground">
              This is the list of your recent requested documents.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/student/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">
            {student?.firstName} {student?.lastName}
          </span>
        </div>
      </div>
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 mt-5">
        <HydrationBoundary state={dehydratedState}>
          <RequestedDocumentsClient />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default RequestedDocuments;
