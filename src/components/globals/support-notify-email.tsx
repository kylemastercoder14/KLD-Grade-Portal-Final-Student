import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  render,
} from "@react-email/components";
import * as React from "react";
import { format } from "date-fns";

interface NotifyEmailProps {
  date: Date;
  name: string;
}

export const SupportNotifyEmail = ({ date, name }: NotifyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Support Ticket Notification - Kolehiyo ng Lungsod ng Dasmariñas
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Column>
              <Img
                src={`https://kld-grade-portal.s3.us-east-1.amazonaws.com/uploads/kld-logo.png`}
                width="150"
                height="150"
                alt="Kolehiyo ng Lungsod ng Dasmariñas"
              />
            </Column>

            <Column align="right" style={tableCell}>
              <Text style={heading}>Support Ticket Notification</Text>
              <Text style={informationTableLabel}>
                {format(date, "dd MMM yyyy")}
              </Text>
            </Column>
          </Section>

          <Section style={informationTable}>
            <Text style={informationTableLabel}>Regal Day! {name},</Text>
            <Text style={informationTableValue}>
              Thank you for reaching out to us. We have received your support.
              We will get back to you as soon as possible.
            </Text>
          </Section>

          <Hr />

          <Section style={informationTable}>
            <Text style={informationTableDisclaimer}>
              DISCLAIMER: This email and any attachments are confidential and
              intended solely for the use of the named recipient(s). If you have
              received this email in error, please take immediate action to
              notify the Kolehiyo ng Lungsod ng Dasmariñas (KLD) by responding
              to the sender and deleting this email from your system. This email
              is not intended for distribution, copying, or sharing with any
              other party. Please be advised that any unauthorized
              dissemination, distribution, copying, or taking any action in
              reliance on the contents of this information is strictly
              prohibited. The views and opinions expressed in this email are
              those of the sender and do not necessarily reflect the views of
              KLD management and its personnel. By receiving this email, you
              acknowledge that you have read, understood, and will comply with
              the terms of this confidentiality notice.
            </Text>
          </Section>

          <Text style={footerCopyright}>
            Copyright © 2024 Kolehiyo ng Lungsod ng Dasmariñas. All rights
            reserved. <br />{" "}
            <Link style={linkColor} href="https://www.facebook.com/kyleandre.lim29/">
              Developed By: Kyle Andre Lim
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export const NotifyEmailHTML = (props: NotifyEmailProps) =>
  render(<SupportNotifyEmail {...props} />, {
    pretty: true,
  });

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};

const linkColor = {
  color: "rgb(13, 42, 31)",
}

const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
};

const tableCell = { display: "table-cell" };

const heading = {
  fontSize: "28px",
  fontWeight: "300",
  color: "#888888",
};

const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
  marginTop: "12px",
};

const informationTableLabel = {
  ...resetText,
  color: "rgb(102,102,102)",
  fontSize: "10px",
};

const informationTableValue = {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const informationTableDisclaimer = {
  fontSize: "12px",
  fontStyle: "italic",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center" as const,
  fontSize: "12px",
  color: "rgb(102,102,102)",
};
