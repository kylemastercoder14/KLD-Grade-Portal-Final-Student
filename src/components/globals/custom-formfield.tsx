/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import {
  DATE_DEFAULT_FORMAT,
  DATE_DISPLAY_FORMAT,
  DATE_YEAR_MIN,
  FormFieldType,
  OPT_LENGTH,
} from "@/constants";
import { cn } from "@/lib/utils";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "./custom-calendar";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import { format } from "date-fns";
import { Checkbox } from "../ui/checkbox";
import HoverEffectWrapper from "@/components/ui/hover-effect-wrapper";
import { DynamicSelect } from "./dynamic-select";
import { Textarea } from "../ui/textarea";
import ImageUpload from "./image-uploader";
import { DynamicArraySelect } from "./dynamic-array-select";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  options?: Array<string>;
  feedbackOptions?: { label: string; value: string; icon: string }[];
  dynamicOptions?: { label: string; value: string }[];
  label?: string;
  type?: string | number;
  placeholder?: string;
  description?: string | React.ReactNode;
  dateFormat?: string;
  showTimeSelect?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  isRequired?: boolean;
  className?: string;
  autoFocus?: boolean;
  renderedValue?: string | string[];
  onCreate?: (value: string) => void;
  renderSkeleton?: (field: any) => React.ReactNode;
  onChange?: (value: any) => void;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    placeholder,
    disabled,
    description,
    type,
    options,
    dynamicOptions,
    feedbackOptions,
    label,
    autoFocus,
    renderedValue,
    onCreate,
    onChange,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <>
          <HoverEffectWrapper disabled={disabled}>
            <FormControl>
              <div className="shad-input-outer">
                {/* Input field */}
                <Input
                  type={
                    type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : type
                  }
                  placeholder={placeholder}
                  disabled={disabled}
                  {...field}
                  className="shad-input"
                  autoFocus={autoFocus}
                  onChange={(event) => {
                    let value = event.target.value;
                    // Handle number type and ensure empty values do not result in NaN
                    if (type === "number") {
                      value = value === "" ? "" : String(parseFloat(value));
                    }
                    field.onChange(value); // Trigger field onChange with the processed value
                  }}
                />

                {/* Toggle visibility for password fields */}
                {type === "password" && (
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={toggleShowPassword}
                    className="floating-right-btn"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" /> // Icon to indicate password visibility is off
                    ) : (
                      <Eye className="w-4 h-4 opacity-50" /> // Icon to indicate password visibility is on
                    )}
                  </button>
                )}
              </div>
            </FormControl>
          </HoverEffectWrapper>
          {description && <FormDescription>{description}</FormDescription>}
        </>
      );

    case FormFieldType.TEXTAREA:
      return (
        <>
          <FormControl>
            <div className="shad-input-outer">
              <Textarea
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                className="shad-input"
                autoFocus={autoFocus}
              />
            </div>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
        </>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <>
          <HoverEffectWrapper disabled={disabled}>
            <FormControl>
              <PhoneInput
                placeholder={placeholder}
                defaultCountry="PH"
                countries={["PH"]}
                international
                countryCallingCodeEditable={false}
                withCountryCallingCode
                limitMaxLength={true}
                numberInputProps={{
                  className: `rounded-md px-4 focus:outline-none shad-input h-full w-full !bg-none border-0
                                    ${
                                      disabled
                                        ? "disabled:opacity-50 disabled:cursor-not-allowed"
                                        : ""
                                    }
                                    ${!field.value ? "text-gray-500" : ""}`,
                }}
                value={field.value as string}
                onChange={field.onChange}
                maxLength={16}
                className="ml-3 h-10"
                disabled={disabled}
              />
            </FormControl>
          </HoverEffectWrapper>

          {description && <FormDescription>{description}</FormDescription>}
        </>
      );

    case FormFieldType.OTP_INPUT:
      return (
        <FormControl>
          <InputOTP
            maxLength={OPT_LENGTH}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            {...field}
          >
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTP>
        </FormControl>
      );

    case FormFieldType.MULTISELECT:
      return (
        <>
          <FormControl>
            <MultiSelector
              values={field.value}
              onValuesChange={field.onChange}
              loop
            >
              <MultiSelectorTrigger
                className={cn(
                  "shad-select-trigger",
                  !field.value && "text-muted-foreground"
                )}
              >
                <MultiSelectorInput
                  disabled={disabled}
                  placeholder={placeholder}
                />
              </MultiSelectorTrigger>
              <MultiSelectorContent>
                <MultiSelectorList>
                  {dynamicOptions && dynamicOptions.length > 0
                    ? dynamicOptions.map((option) => (
                        <MultiSelectorItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MultiSelectorItem>
                      ))
                    : options?.map((option) => (
                        <MultiSelectorItem key={option} value={option}>
                          {option}
                        </MultiSelectorItem>
                      ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
        </>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={(value) => {
              if (onChange) {
                onChange(value);
              } else {
                field.onChange(value);
              }
            }}
            value={field.value || renderedValue}
          >
            <SelectTrigger
              disabled={disabled}
              className={cn(
                "shad-select-trigger",
                !field.value && "text-muted-foreground"
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              {dynamicOptions && dynamicOptions.length > 0
                ? dynamicOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))
                : options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldType.DYNAMICSELECT:
      return (
        <FormControl>
          <DynamicSelect
            onChange={field.onChange}
            disabled={disabled}
            placeholder={placeholder}
            options={dynamicOptions}
            onCreate={(value) => onCreate && onCreate(value)}
            value={field.value || ""}
          />
        </FormControl>
      );

    case FormFieldType.DYNAMICSELECTARRAY:
      return (
        <FormControl>
          <DynamicArraySelect
            onChange={field.onChange}
            disabled={disabled}
            placeholder={placeholder}
            options={dynamicOptions}
            onCreate={(value) => onCreate && onCreate(value)}
            value={field.value || []}
          />
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "shad-input",
                  !field.value && "text-muted-foreground"
                )}
                disabled={disabled}
              >
                <CalendarIcon className="mr-4 h-4 w-4" />
                {field.value ? (
                  format(field.value, DATE_DISPLAY_FORMAT)
                ) : (
                  <span>Select a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              mode="single"
              captionLayout="dropdown-buttons"
              selected={field.value ? new Date(field.value) : undefined}
              onSelect={(date) =>
                date && field.onChange(format(date, DATE_DEFAULT_FORMAT))
              }
              fromYear={DATE_YEAR_MIN}
              toYear={new Date().getFullYear()}
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      );

    case FormFieldType.RADIO:
      return (
        <FormControl>
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="radio-group flex items-center space-x-2"
            disabled={disabled}
          >
            {options &&
              options.map((option) => (
                <FormItem
                  key={option}
                  className="radio-item flex gap-1.5 items-center"
                >
                  <FormControl>
                    <RadioGroupItem value={option} />
                  </FormControl>
                  <FormLabel
                    className={cn(
                      "!my-auto font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {option}
                  </FormLabel>
                </FormItem>
              ))}
          </RadioGroup>
        </FormControl>
      );

    case FormFieldType.FEEDBACK_RADIO:
      return (
        <FormControl>
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="grid-cols-3"
            disabled={disabled}
          >
            {feedbackOptions &&
              feedbackOptions.map((option) => (
                <label
                  key={option.value}
                  className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
                >
                  <FormControl>
                    <RadioGroupItem
                      value={option.value}
                      className="sr-only after:absolute after:inset-0"
                    />
                  </FormControl>
                  <p>{option.icon}</p>
                  <p className="text-xs font-medium leading-none text-foreground">
                    {option.label}
                  </p>
                </label>
              ))}
          </RadioGroup>
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <div className="items-top flex space-x-2">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <div className="grid gap-1.5 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
        </div>
      );

    case FormFieldType.DROP_ZONE:
      return (
        <FormControl>
          <ImageUpload
            defaultValue={field.value || ""}
            onImageUpload={(url) => field.onChange(url)}
          />
        </FormControl>
      );

    case FormFieldType.HIDDEN:
      return (
        <FormControl>
          <Input
            type="text"
            name="verify"
            value={field.value}
            onChange={field.onChange}
            hidden
          />
        </FormControl>
      );

    case FormFieldType.HONEY_POT:
      return (
        <FormControl>
          <Input
            type="text"
            name="xfield"
            value={""}
            // onChange={field.onChange}
            className="hidden"
          />
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, label, name, isRequired, className } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="space-y-1">
            {fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>
                {label}
                {isRequired === true ? (
                  <span className="text-red-700 text-xs"> *</span>
                ) : isRequired === false ? (
                  <span className="text-gray-500 text-xs ml-2">(Optional)</span>
                ) : (
                  ""
                )}
              </FormLabel>
            )}
            <RenderField field={field} props={props} />
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
