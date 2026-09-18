"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Shows a full-screen circular loader until the current page (including its
 * images) has actually finished loading, so visitors don't see images pop
 * in late. Content underneath still loads in the background while the
 * spinner is up, then everything is revealed at once. Runs on the very
 * first load AND again on every page-to-page navigation, so it shows on
 * every page of the site, not just the homepage.
 */
export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  // First load: wait for the whole document (incl. images) to finish.
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    const fallback = setTimeout(() => setLoading(false), 5000);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  // Every subsequent route change: show the spinner again until the new
  // page's images are ready (or a short timeout passes).
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    setLoading(true);

    let cancelled = false;
    const checkImages = () => {
      const imgs = Array.from(document.images);
      const allDone = imgs.every((img) => img.complete);
      if (allDone && !cancelled) {
        setLoading(false);
      }
    };

    // Give the new page a moment to mount, then poll briefly for images.
    const start = setTimeout(checkImages, 50);
    const poll = setInterval(checkImages, 150);
    const fallback = setTimeout(() => !cancelled && setLoading(false), 1500);

    return () => {
      cancelled = true;
      clearTimeout(start);
      clearInterval(poll);
      clearTimeout(fallback);
    };
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <div className="h-14 w-14 rounded-full border-4 border-lightblue border-t-blue animate-spin" />
        </div>
      )}
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  );
}
