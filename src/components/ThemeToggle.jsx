import { useCallback, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function isDarkDocument() {
  return document.documentElement.classList.contains("dark");
}

function ThemeToggle() {
  const [dark, setDark] = useState(isDarkDocument);

  useEffect(() => {
    setDark(isDarkDocument());
  }, []);

  const toggle = useCallback(() => {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-brandDarkGrey/30 bg-card text-brandDarkBlue shadow-card backdrop-blur-sm transition hover:border-brandLightBlue/40 hover:text-brandLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandDarkBlue"
    >
      {dark ? (
        <HiOutlineSun className="h-6 w-6" aria-hidden />
      ) : (
        <HiOutlineMoon className="h-6 w-6" aria-hidden />
      )}
    </button>
  );
}

export default ThemeToggle;
