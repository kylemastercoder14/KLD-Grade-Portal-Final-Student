"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const AdvisingServicesClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course Title</TableHead>
          <TableHead>Course Adviser</TableHead>
          <TableHead>Date/Time Advised</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Multimedia Systems (PCIS2220)</TableCell>
          <TableCell>Inst. John Paulo B. Mungcal</TableCell>
          <TableCell>Nov 2, 2024 10:05 am</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AdvisingServicesClient;
