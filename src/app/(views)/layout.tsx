
import Header from "@/components/globals/header";
import React from "react";

const ViewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default ViewsLayout;