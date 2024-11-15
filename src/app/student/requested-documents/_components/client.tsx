"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Printer } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useGetRequestedDocuments } from "@/data/document";
import { Button } from "@/components/ui/button";

const RequestedDocumentsClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const {
    data: requestedDocumentData,
    error: requestedDocumentError,
    isLoading: requestedDocumentLoading,
  } = useGetRequestedDocuments();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (requestedDocumentError) {
      toast.error(requestedDocumentError?.message || "An error occurred");
    }
  }, [requestedDocumentError]);

  if (!isMounted) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type of Document</TableHead>
          <TableHead>Purpose</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requestedDocumentLoading ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              <div className="flex mt-3 items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            </TableCell>
          </TableRow>
        ) : (
          requestedDocumentData?.data?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.typeDocument}</TableCell>
                <TableCell>{item.purpose}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Pending" ? "destructive" : "secondary"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="secondary" size="sm" disabled>
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default RequestedDocumentsClient;
