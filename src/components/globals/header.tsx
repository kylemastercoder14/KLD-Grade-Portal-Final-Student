"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserDropdown from "./user-dropdown";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "light" : "dark");
  };


  return (
    <div className="sticky dark:bg-zinc-900 bg-zinc-100 inset-x-0 top-0 border-b w-full">
      <div className="max-w-7xl mx-auto flex py-2 items-center justify-between">
        <Link className="flex items-center gap-3" href="/dashboard">
          <Image src="/kld-logo.png" alt="Logo" width={60} height={60} />
          <div className="flex flex-col">
            <p className="text-xl tracking-[-0.08em] font-bold">
              KLD Grade Portal
            </p>
            <p className="text-xs text-muted-foreground">
              Kolehiyo ng Lungsod ng Dasmarinas
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode"
              checked={theme === "light"}
              onCheckedChange={handleToggle}
            />
            <Label htmlFor="dark-mode">
              {theme === "light" ? "Dark" : "Light"} Mode
            </Label>
          </div>
          <UserDropdown />
        </div>
      </div>
      <div className="w-full px-[330px] border-t mx-auto flex gap-5 items-center">
        <Link className={cn("border-r pr-3 py-2", pathname === "/dashboard" ? "text-primary" : "")} href="/dashboard">
          <Home />
        </Link>
        <Link className={cn("border-r pr-3 py-2", pathname === "/grades" ? "text-primary" : "")} href="/grades">
          eCOG
        </Link>
        <Link className={cn("border-r pr-3 py-2", pathname === "/consultation" ? "text-primary" : "")} href="/consultation">
          My Consultation
        </Link>
        <Link className={cn("border-r pr-3 py-2", pathname === "/enrolled-course" ? "text-primary" : "")} href="/enrolled-course">
          My Current Enrolled Course
        </Link>
        <Link className={cn("border-r pr-3 py-2", pathname === "/advising-services" ? "text-primary" : "")} href="/advising-services">
          Advising Services
        </Link>
        <Button size="sm" className="my-2">Request a Document</Button>
      </div>
    </div>
  );
};

export default Header;
