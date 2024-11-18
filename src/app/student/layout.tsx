import Header from "@/components/globals/header";
import { useUser } from "@/hooks/use-user";
import { redirect } from "next/navigation";
import React from "react";

const ViewsLayout = async ({ children }: { children: React.ReactNode }) => {
  const { student } = await useUser();
  if (!student) redirect("/");
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default ViewsLayout;
