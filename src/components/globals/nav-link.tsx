"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import RequestDocument from "../forms/request-document-form";

const NavLink = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <>
      <RequestDocument isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="w-full px-[330px] border-t mx-auto flex gap-5 items-center">
        <Link
          className={cn(
            "border-r pr-3 py-2",
            pathname === "/student/dashboard" ? "text-primary" : ""
          )}
          href="/student/dashboard"
        >
          <Home />
        </Link>
        <Link
          className={cn(
            "border-r pr-3 py-2",
            pathname === "/student/grades" ? "text-primary" : ""
          )}
          href="/student/grades"
        >
          eCOG
        </Link>
        <Link
          className={cn(
            "border-r pr-3 py-2",
            pathname === "/student/consultation" ? "text-primary" : ""
          )}
          href="/student/consultation"
        >
          My Consultation
        </Link>
        <Link
          className={cn(
            "border-r pr-3 py-2",
            pathname === "/student/enrolled-course" ? "text-primary" : ""
          )}
          href="/student/enrolled-course"
        >
          My Current Enrolled Course
        </Link>
        <Link
          className={cn(
            "border-r pr-3 py-2",
            pathname === "/student/advising-services" ? "text-primary" : ""
          )}
          href="/student/advising-services"
        >
          Advising Services
        </Link>
        <Button onClick={() => setIsOpen(true)} size="sm" className="my-2">
          Request a Document
        </Button>
      </div>
    </>
  );
};

export default NavLink;
