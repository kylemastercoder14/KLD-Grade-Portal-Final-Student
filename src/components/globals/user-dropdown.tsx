"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/server-actions/login";
import { redirect } from "next/navigation";
import { Programs, Students } from "@prisma/client";
import Link from "next/link";

interface UserDropdownProps extends Students {
  programs: Programs;
}

const UserDropdown = ({ user }: { user: UserDropdownProps }) => {
  const handleLogout = async () => {
    await logout();
    redirect("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={user.profileImage ?? ""} />
            <AvatarFallback>
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <p className="font-bold text-sm">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {user.studentNumber} ({user.programs.code})
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/student/account">My Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>My Consultations</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
