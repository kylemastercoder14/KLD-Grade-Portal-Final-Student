"use client";
import React from "react";
import FeedbackForm from "../forms/feedback-form";
import { Button } from "../ui/button";
import { LifeBuoy, Send } from "lucide-react";
import SupportForm from "../forms/support-form";

const ModalClient = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false);
  const [isSupportOpen, setIsSupportOpen] = React.useState(false);
  return (
    <>
      <div className="fixed md:bottom-3 right-5 bottom-5 flex items-center gap-2">
        <Button
          onClick={() => setIsFeedbackOpen(true)}
          size="sm"
          variant="outline"
        >
          <Send className="w-4 h-4 mr-2" />
          Feedback
        </Button>
        <Button onClick={() => setIsSupportOpen(true)} size="sm" variant="secondary">
          <LifeBuoy className="w-4 h-4 mr-2" />
          Support
        </Button>
      </div>
      <SupportForm
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
      <FeedbackForm
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </>
  );
};

export default ModalClient;
