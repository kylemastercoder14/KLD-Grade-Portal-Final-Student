/* eslint-disable @next/next/no-img-element */
"use client";
import { authenticate } from "@/lib/server-actions/authenticator";
import React, { useState } from "react";

const GenerateClient = ({ email }: { email: string }) => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const setupTOTP = async () => {
    try {
      const response = await authenticate(email);
      setQrCode(response.qrcode ?? null);
    } catch (error) {
      console.error("Failed to set up TOTP", error);
    }
  };
  return (
    <div>
      <button onClick={setupTOTP} className="btn">
        Generate QR Code
      </button>
      {qrCode && (
        <img src={qrCode} alt="Scan this QR code with your authenticator app" />
      )}
    </div>
  );
};

export default GenerateClient;
