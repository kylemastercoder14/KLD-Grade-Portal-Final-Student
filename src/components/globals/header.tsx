import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserDropdown from "./user-dropdown";
import SwitchMode from "./switch-mode";
import NavLink from "./nav-link";
import { useUser } from "@/hooks/use-user";

const Header = async () => {
  const { student } = await useUser();
  if (!student) return null;
  return (
    <div className="sticky dark:bg-zinc-900 bg-zinc-100 z-50 inset-x-0 top-0 border-b w-full">
      <div className="max-w-7xl mx-auto flex py-2 items-center justify-between">
        <Link className="flex items-center gap-3" href="/student/dashboard">
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
          <SwitchMode />
          <UserDropdown user={student} />
        </div>
      </div>
      <NavLink />
    </div>
  );
};

export default Header;
