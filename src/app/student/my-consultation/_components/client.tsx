"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { useGetConsultation } from "@/data/consultation";
import { Badge } from "@/components/ui/badge";

const MyConsultationClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const {
    data: consultationData,
    error: consultationError,
    isLoading: consultationLoading,
  } = useGetConsultation();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (consultationError) {
      toast.error(consultationError?.message || "An error occurred");
    }
  }, [consultationError]);

  if (!isMounted) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course Title</TableHead>
          <TableHead>Concern</TableHead>
          <TableHead>Other Details</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consultationLoading ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              <div className="flex mt-3 items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            </TableCell>
          </TableRow>
        ) : (consultationData?.data ?? []).length > 0 ? (
          consultationData?.data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.course.name} ({item.course.code})
              </TableCell>
              <TableCell>{item.concern}</TableCell>
              <TableCell>{item.comment}</TableCell>
              <TableCell>
                {item.teacher.firstName} {item.teacher.lastName}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "Pending" ? "destructive" : "secondary"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No consultaion found yet.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MyConsultationClient;
