import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-4 rounded-full border border-light/30 bg-white/40 px-3 py-1 text-xs font-medium backdrop-blur hover:bg-white/70 dark:border-dark/40 dark:bg-dark/60 dark:text-light dark:hover:bg-dark/80 shadow-soft"
    >
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
