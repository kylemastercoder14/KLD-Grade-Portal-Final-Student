import speakeasy from "speakeasy";

export const generateTOTPSecret = (studentNumber: string) => {
  const secret = speakeasy.generateSecret({
    name: `KLD Grade Portal - (${studentNumber})`,
    issuer: "Kolehiyo ng Lungsod ng Dasmarinas",
  });
  return secret;
};
