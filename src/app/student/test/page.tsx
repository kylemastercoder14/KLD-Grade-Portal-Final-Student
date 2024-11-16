import { cookies } from "next/headers";

import { mails } from "./mail";
import { Mail } from "./_components/mail";
import { useUser } from "@/hooks/use-user";
import Link from "next/link";
import { Home, Inbox } from "lucide-react";

export default async function MailPage() {
  const { student } = await useUser();
  const layout = cookies().get("react-resizable-panels:layout:mail");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Inbox size={40} className="text-primary" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl font-semibold">My Inbox</p>
            <p className="text-sm text-muted-foreground">
              Grade Portal Messaging System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/student/dashboard">
            <Home size={15} />
          </Link>
          <p className="text-sm">/</p>
          <span className="text-sm text-primary">
            {student?.firstName} {student?.lastName}
          </span>
        </div>
      </div>
      <div className="flex-col hidden dark:bg-zinc-900 bg-zinc-100 px-5 py-3 md:flex mt-5">
        <Mail
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </div>
  );
}
