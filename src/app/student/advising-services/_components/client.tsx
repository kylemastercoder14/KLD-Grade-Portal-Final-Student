"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAdvising } from "@/data/advising";
import { format, formatDistanceToNow } from "date-fns";
import { Loader2, Pencil, Send } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Advising, Courses, Teachers } from "@prisma/client";
import AdvisingForm from "@/components/forms/advising-form";
import { Textarea } from "@/components/ui/textarea";

interface AdvisingProps extends Advising {
  teacher: Teachers;
  course: Courses;
}

const AdvisingServicesClient = () => {
  const { data: advisingData, error, isLoading } = useGetAdvising();
  const [isMounted, setIsMounted] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<AdvisingProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AdvisingForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="grid md:grid-cols-10">
        <div className="col-span-3 border h-[50vh] overflow-y-auto px-3 py-2">
          <h3>Inbox</h3>
          <Button onClick={() => setIsModalOpen(true)} className="mt-2 w-full">
            <Pencil className="w-4 h-4 mr-2" />
            Compose Message
          </Button>
          {isLoading ? (
            <div className="flex flex-col items-center h-screen justify-center">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            advisingData?.data?.map((item) => {
              const relativeTime = formatDistanceToNow(
                new Date(item.createdAt),
                { addSuffix: true }
              );
              return (
                <Card
                  key={item.id}
                  className={`mt-4 cursor-pointer ${
                    selectedItem?.id === item.id ? "bg-accent" : ""
                  }`} // Highlight the selected card
                  onClick={() => setSelectedItem(item)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-lg">
                        {item.teacher.firstName} {item.teacher.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {relativeTime}
                      </p>
                    </div>
                    <p className="font-semibold text-sm mt-2">
                      {item.course.name} ({item.course.code})
                    </p>
                    <p className="text-xs line-clamp-2 text-muted-foreground">
                      {item.message}
                    </p>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
        <div className="col-span-7 border px-3 py-2">
          {selectedItem ? (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={selectedItem.teacher.profileImage || ""}
                    />
                    <AvatarFallback>
                      {selectedItem.teacher.firstName.charAt(0)}
                      {selectedItem.teacher.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">
                      {selectedItem.teacher.firstName}
                      {selectedItem.teacher.lastName}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {selectedItem.course.name} ({selectedItem.course.code})
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {format(selectedItem.createdAt, "MMMM dd, yyyy hh:mm a")}
                </p>
              </div>
              <Separator className="my-3" />
              <div className="flex flex-col h-[40vh]">
                <p className="text-sm font-normal">{selectedItem.message}</p>
                <div className="mt-auto">
                  <Textarea
                    placeholder={`Reply ${selectedItem.teacher.firstName} ${selectedItem.teacher.lastName}...`}
                  />
                  <Button variant="secondary" size="sm" className="mt-2 w-full">
                    {" "}
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <p>Select a message to see the details</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvisingServicesClient;
