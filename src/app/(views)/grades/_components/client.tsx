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

const GradeClient = () => {
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
          <TableHead>Academic Year</TableHead>
          <TableHead>Semester</TableHead>
          <TableHead>Course Title</TableHead>
          <TableHead>Units</TableHead>
          <TableHead>Final</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>2024-2025</TableCell>
          <TableCell>1ST SEMESTER</TableCell>
          <TableCell>Multimedia Systems (PCIS2220)</TableCell>
          <TableCell>3</TableCell>
          <TableCell>1.25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default GradeClient;
