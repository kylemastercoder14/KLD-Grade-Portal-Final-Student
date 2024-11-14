"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "lucide-react";
import React from "react";

const ConsultationClient = () => {
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
            <TableHead>Section</TableHead>
            <TableHead>Course Title</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Professor</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>BSIS-405</TableCell>
            <TableCell>Multimedia Systems (PCIS2220)</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Inst. John Paulo B. Mungcal</TableCell>
            <TableCell>
              <Button>
                <User className="mr-2 w-4 h-4" />
                Consult
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ConsultationClient;
