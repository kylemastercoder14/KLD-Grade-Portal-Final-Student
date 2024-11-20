import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserDropdown from "./user-dropdown";
import SwitchMode from "./switch-mode";
import NavLink from "./nav-link";
import { useUser } from "@/hooks/use-user";
import ModalClient from "./modal-client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = async () => {
  const { student } = await useUser();
  if (!student) return null;
  return (
    <>
      <ModalClient />
      <div className="sticky dark:bg-zinc-900 bg-zinc-100 z-50 inset-x-0 top-0 border-b w-full">
        <div className="md:max-w-7xl px-5 md:px-0 mx-auto flex py-2 items-center md:justify-between gap-5">
          <div className="flex items-center gap-2">
            <Link className="flex items-center gap-3" href="/student/dashboard">
              <div className="relative md:w-20 md:h-20 w-10 h-10">
                <Image src="/kld-logo.png" alt="Logo" fill className="w-full h-full" />
              </div>
              <div className="md:flex flex-col hidden">
                <p className="text-xl tracking-[-0.08em] font-bold">
                  KLD Grade Portal
                </p>
                <p className="text-xs text-muted-foreground">
                  Kolehiyo ng Lungsod ng Dasmarinas
                </p>
              </div>
            </Link>
            <Sheet>
              <SheetTrigger className="md:hidden block">
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <NavLink />
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-3">
            <SwitchMode />
            <UserDropdown user={student} />
          </div>
        </div>
        <div className="md:block hidden">
          <NavLink />
        </div>
      </div>
    </>
  );
};

export default Header;
