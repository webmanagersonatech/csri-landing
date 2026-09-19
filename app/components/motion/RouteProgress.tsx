"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Thin animated bar at the top of the viewport shown briefly on route
 * changes. Unlike the old Preloader, it never covers or hides the page:
 * the new route's content paints immediately underneath it, this is purely
 * a decorative cue that a navigation happened.
 */
export default function RouteProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="route-progress"
          className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-blue origin-left"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        />
      )}
    </AnimatePresence>
  );
}
