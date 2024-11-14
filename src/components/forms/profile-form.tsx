"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Programs, Sections, Students, YearLevels } from "@prisma/client";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentValidators } from "@/lib/validations";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useAddressData } from "@/functions/address-selection";
import CustomFormField from "@/components/globals/custom-formfield";
import { FormFieldType } from "@/constants";
import { Separator } from "../ui/separator";
import { Loader2 } from "lucide-react";
import { upload } from "@/lib/upload";
import { toast } from "sonner";
import AlertModal from "../ui/alert-modal";
import { useSaveStudent } from "@/data/student";
import {
  changeProfileImage,
  deleteProfileImage,
} from "@/lib/server-actions/account";

interface AccountProps extends Students {
  programs: Programs;
  yearLevels: YearLevels;
  sections: Sections;
}

const AccountProfile = ({ user }: { user: AccountProps }) => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(
    user?.profileImage || ""
  );
  const [isImageChanging, setImageChanging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof StudentValidators>>({
    resolver: zodResolver(StudentValidators),
    mode: "onChange",
    defaultValues: user
      ? {
          ...user,
          middleName: user.middleName ?? "",
          extensionName: user.extensionName ?? "",
          profileImage: user.profileImage ?? "",
          maritalStatus: user.civilStatus ?? "",
          municipality: user.city ?? "",
          barangay: user.barangay ?? "",
          studentNumber: user.studentNumber ?? "",
          password: "",
          yearLevel: user?.yearLevels.name ?? "",
          program: user?.programs.name ?? "",
          section: user?.sections.name ?? "",
        }
      : {
          studentNumber: "",
          firstName: "",
          middleName: "",
          lastName: "",
          extensionName: "",
          birthDate: "",
          age: "",
          gender: "",
          maritalStatus: "",
          phoneNumber: "",
          region: "CALABARZON",
          province: "Cavite",
          municipality: "",
          barangay: "",
          houseNumber: "",
          zipCode: "",
          email: "",
          password: "",
          profileImage: "",
          elementarySchool: "",
          highSchool: "",
          confirmPassword: "",
          program: "",
          yearLevel: "",
          section: "",
        },
  });

  const { mutate: saveStudent, isPending: isLoading } = useSaveStudent(user);

  async function onSubmit(values: z.infer<typeof StudentValidators>) {
    saveStudent(values, {
      onSuccess: () => router.push("/student/account"),
    });
  }

  const selectedRegionName = form.watch("region");
  const selectedProvinceName = form.watch("province");
  const selectedMunicipalityName = form.watch("municipality");

  const {
    regionOptions,
    provinceOptions,
    municipalityOptions,
    barangayOptions,
  } = useAddressData(
    selectedRegionName,
    selectedProvinceName,
    selectedMunicipalityName
  );

  const handleChangePicture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageChanging(true);
      const response = await upload(file);

      if (response.url) {
        const upload = await changeProfileImage(response.url);
        if (upload.success) {
          setProfileImage(response.url);
          toast.success(upload.success);
          router.refresh();
        } else {
          console.error("Error uploading to database:", upload.error);
          toast.error(upload.error);
        }
      } else {
        toast.error("Error uploading image. Please try again.");
      }

      setImageChanging(false);
    }
  };

  const handleDeletePicture = async () => {
    setLoading(true);
    try {
      const response = await deleteProfileImage();

      if (response.success) {
        setProfileImage(null);
        toast.success(response.success);
        window.location.reload();
      } else {
        console.error("Error deleting image:", response.error);
        toast.error(response.error || "Failed to delete the profile image.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred while deleting the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={isOpen}
        loading={loading}
        title="Are you sure you want to delete your profile picture?"
        onClose={() => setIsOpen(false)}
        onConfirm={handleDeletePicture}
      />
      <div className="flex items-center gap-2">
        <Avatar className="w-16 h-16 mr-2">
          <AvatarImage src={profileImage ?? ""} />
          <AvatarFallback>
            {user?.firstName.charAt(0)}
            {user?.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <Button
          variant="default"
          size="sm"
          onClick={handleChangePicture}
          disabled={isImageChanging}
        >
          {isImageChanging ? "Uploading..." : "Change Picture"}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          disabled={isImageChanging}
          onClick={() => setIsOpen(true)}
          variant="destructive"
          size="sm"
        >
          Delete Picture
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h3 className="">Personal Information</h3>
          <Separator className="mt-3 mb-2" />
          <div className="space-y-3 flex flex-col">
            <CustomFormField
              label="Student Number"
              name="studentNumber"
              placeholder="Enter student number"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled
            />
            <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
              <CustomFormField
                label="First Name"
                name="firstName"
                placeholder="Juan"
                isRequired
                type="text"
                fieldType={FormFieldType.INPUT}
                control={form.control}
                disabled={isLoading}
              />
              <CustomFormField
                label="Middle Name"
                name="middleName"
                placeholder="Santiago"
                isRequired={false}
                type="text"
                fieldType={FormFieldType.INPUT}
                control={form.control}
                disabled={isLoading}
              />
              <CustomFormField
                label="Last Name"
                name="lastName"
                placeholder="Dela Cruz"
                isRequired
                type="text"
                fieldType={FormFieldType.INPUT}
                control={form.control}
                disabled={isLoading}
              />
              <CustomFormField
                label="Extension Name"
                name="extensionName"
                placeholder="JR, SR, III"
                isRequired={false}
                type="text"
                fieldType={FormFieldType.INPUT}
                control={form.control}
                disabled={isLoading}
              />
            </div>
            <CustomFormField
              label="Email Address"
              name="email"
              placeholder="jdelacruz@kld.edu.ph"
              isRequired
              type="email"
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled={isLoading}
            />
            <CustomFormField
              label="Phone Number"
              name="phoneNumber"
              type="phone"
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              disabled={isLoading}
              isRequired
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <CustomFormField
                label="Date of Birth"
                name="birthDate"
                placeholder="dd/mm/yyyy"
                isRequired
                type="date"
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                disabled={isLoading}
              />
              <CustomFormField
                label="Age"
                name="age"
                placeholder="Enter age"
                isRequired
                fieldType={FormFieldType.INPUT}
                control={form.control}
                disabled={isLoading}
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <CustomFormField
                label="Sex"
                name="gender"
                placeholder="Select your sex"
                isRequired
                fieldType={FormFieldType.SELECT}
                control={form.control}
                options={["Male", "Female"]}
                disabled={isLoading}
              />
              <CustomFormField
                label="Marital Status"
                name="maritalStatus"
                placeholder="Select your marital status"
                isRequired
                fieldType={FormFieldType.SELECT}
                control={form.control}
                options={["Single", "Married", "Separated", "Widowed"]}
                disabled={isLoading}
              />
            </div>
            <CustomFormField
              label="House/Unit/Block No., Street, Subdivision/Village"
              name="houseNumber"
              placeholder="Blk 1 Lot 2 Phase 3"
              isRequired
              fieldType={FormFieldType.INPUT}
              type="text"
              control={form.control}
              disabled={isLoading}
            />
            <CustomFormField
              label="Region"
              name="region"
              placeholder="Select your region"
              isRequired
              fieldType={FormFieldType.SELECT}
              control={form.control}
              dynamicOptions={regionOptions.map((option) => ({
                label: option,
                value: option,
              }))}
              disabled
            />
            <CustomFormField
              label="Province"
              name="province"
              placeholder="Select your province"
              isRequired
              fieldType={FormFieldType.SELECT}
              control={form.control}
              dynamicOptions={provinceOptions.map((option) => ({
                label: option,
                value: option,
              }))}
              disabled
            />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
              <CustomFormField
                label="Municipality"
                name="municipality"
                placeholder="Select your municipality"
                isRequired
                fieldType={FormFieldType.SELECT}
                control={form.control}
                dynamicOptions={municipalityOptions.map((option) => ({
                  label: option,
                  value: option,
                }))}
                disabled={isLoading}
              />
              <CustomFormField
                label="Barangay"
                name="barangay"
                placeholder="Select your barangay"
                isRequired
                fieldType={FormFieldType.SELECT}
                control={form.control}
                dynamicOptions={barangayOptions.map((option) => ({
                  label: option,
                  value: option,
                }))}
                disabled={isLoading || !selectedMunicipalityName}
              />
              <CustomFormField
                label="Zip Code"
                name="zipCode"
                placeholder="4114"
                isRequired
                fieldType={FormFieldType.INPUT}
                type="text"
                control={form.control}
                disabled={isLoading}
              />
            </div>
          </div>
          <h3 className="mt-5">Educational Details</h3>
          <Separator className="mt-3 mb-2" />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mb-3">
            <CustomFormField
              label="Year Level"
              name="yearLevel"
              placeholder="Enter your year level"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled
            />
            <CustomFormField
              label="Program"
              name="program"
              placeholder="Enter your program"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled
            />
            <CustomFormField
              label="Section"
              name="section"
              placeholder="Enter your section"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <CustomFormField
              label="Elementary School"
              name="elementarySchool"
              placeholder="Enter your elementary school"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled={isLoading}
            />
            <CustomFormField
              label="High School"
              name="highSchool"
              placeholder="Enter your high school"
              isRequired
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled={isLoading}
            />
          </div>
          <h3 className="mt-5">Change Password</h3>
          <Separator className="mt-3 mb-2" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <CustomFormField
              label="New Password"
              name="password"
              placeholder="Enter new password"
              isRequired
              type="password"
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled={isLoading}
            />
            <CustomFormField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm new password"
              isRequired
              type="password"
              fieldType={FormFieldType.INPUT}
              control={form.control}
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            className="mt-3 md:w-auto w-full"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin mr-2" />}
            Save Changes
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AccountProfile;
