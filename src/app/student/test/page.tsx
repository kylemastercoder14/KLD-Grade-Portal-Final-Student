import { useUser } from "@/hooks/use-user";
import React from "react";
import GenerateClient from "./client";

const TestAuthenticator = async () => {
  const { student } = await useUser();
  return (
    <div>
      <GenerateClient email={student?.email as string} />
    </div>
  );
};

export default TestAuthenticator;
