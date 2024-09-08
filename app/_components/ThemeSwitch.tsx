"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { capitalize } from "../_lib/utils";
import Button from "./Button";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));
  if (!mounted)
    return (
      <Button
        size="small"
        type="button"
        className="inline-flex w-fit min-w-[95px] items-center justify-between gap-3 text-slate-700"
        id="options-menu"
        aria-expanded={isOpen}
        onClick={() => {}}
      >
        <span className="ml-2">{"Theme"}</span>
        <SunIcon className="size-4" />
      </Button>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <Button
        size="small"
        type="button"
        className="inline-flex w-full min-w-[95px] items-center justify-between gap-3 text-slate-700"
        id="options-menu"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span className="ml-2">{"Theme"}</span>
        <SunIcon className="size-4" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map((themeItem) => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-slate-200 ${
                    themeItem === theme
                      ? "bg-slate-300 text-slate-100 hover:bg-slate-400"
                      : "text-slate-700"
                  }`}
                >
                  {capitalize(themeItem)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
