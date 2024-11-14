"use client";

import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "light" : "dark");
  };
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        checked={theme === "light"}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="dark-mode">
        {theme === "light" ? "Dark" : "Light"} Mode
      </Label>
    </div>
  );
};

export default SwitchMode;
