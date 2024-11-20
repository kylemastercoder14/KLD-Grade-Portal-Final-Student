import AccountProfile from "@/components/forms/profile-form";
import { useUser } from "@/hooks/use-user";
import { Loader2 } from "lucide-react";
import React from "react";

const Account = async () => {
  const { student } = await useUser();
  return (
    <div className="md:max-w-7xl px-5 pb-5 md:mx-auto mt-5">
      {student ? (
        <AccountProfile user={student} />
      ) : (
        <div className="flex flex-col h-screen items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Account;
