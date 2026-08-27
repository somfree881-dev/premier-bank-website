"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const THEME_STORAGE_KEY = "premier-bank-theme";

/** Keeps the visitor's selected theme across all routes in this browser. */
export function usePersistentTheme(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [darkMode, setDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem(THEME_STORAGE_KEY) === "dark");
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode, isHydrated]);

  return [darkMode, setDarkMode];
}
