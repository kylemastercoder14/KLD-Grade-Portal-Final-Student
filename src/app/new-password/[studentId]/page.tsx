import { ModeToggle } from "@/components/globals/mode-toggle";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import React, { Suspense } from "react";
import NewPasswordComponent from "@/components/forms/new-password-component";
import { Loader2 } from "lucide-react";

const NewPassword = ({ params }: { params: { studentId: string } }) => {
  return (
    <Suspense fallback={<Loader2 className="w-5 h-5 animate-spin" />}>
      <div className="flex flex-col px-10 relative h-screen items-center justify-center bg-[url('/school.jpg')] bg-no-repeat bg-cover">
        <div className="overlay fixed bg-black/60 w-full h-full backdrop-blur-sm"></div>
        <div className="fixed bottom-3 right-3 z-50 bg-white dark:bg-black p-1 rounded-full">
          <ModeToggle />
        </div>
        <div className="z-10 relative">
          <div className="flex flex-col items-center justify-center">
            <Image src="/kld-logo.png" alt="Logo" width={100} height={100} />
            <p className="text-2xl text-white text-center font-bold">
              KLD Student Portal
            </p>
          </div>
          <p className="bg-black/40 text-center text-white px-5 py-1 rounded-md mt-3">
            Log in to view your grades, access academic advising tools, and stay
            updated on your educational journey.
          </p>
          <Card className="mt-5">
            <CardContent className="p-5">
              <NewPasswordComponent studentId={params.studentId as string} />
            </CardContent>
          </Card>
          <p className="bg-black/40 text-center text-white px-5 py-1 rounded-md mt-3">
            <span className="text-emerald-300 font-semibold">
              Kolehiyo ng Lungsod ng Dasmarinas
            </span>{" "}
            | &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </Suspense>
  );
};

export default NewPassword;
