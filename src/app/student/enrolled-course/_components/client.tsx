"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const EnrolledCourseClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-5 py-3">
      <Table>
        <TableCaption>
          A list of your enrolled courses this semester.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Course Title</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Pre-requisite</TableHead>
            <TableHead>Professor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Multimedia Systems (PCIS2220)</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Human Computer Interaction (PCIS2210)</TableCell>
            <TableCell>Inst. John Paulo B. Mungcal</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default EnrolledCourseClient;
