"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main className="flex flex-col items-center justify-center h-dvh space-y-4 bg-gradient-to-r from-[#9ebd13]/60 to-[#008552]/60 p-10">
      <h3 className=" text-center text-primary">
        Oops! Something went wrong
      </h3>
      <h1 className="text-center text-primary">
        {error.message || "Something went wrong"}
      </h1>
      <p className="text-center text-dark-600">
        Please try again later or contact support if the problem persists.
      </p>

      <div className="p-5 flex flex-col">
        <Button>Go back to Homepage</Button>
        <Button
          onClick={reset}
          className="underline underline-offset-4"
          variant={"link"}
        >
          Try again
        </Button>
      </div>
    </main>
  );
};

export default error;
