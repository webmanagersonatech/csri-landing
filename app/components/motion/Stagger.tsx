"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wrap a grid/list with <Stagger> and each child with <StaggerItem> to have
 * cards/rows fade in one after another as the section scrolls into view.
 * Like FadeIn, content is always present in the DOM immediately — this only
 * layers a scroll-triggered animation on top, it never gates first paint.
 *
 * Usage:
 *   <Stagger className="grid grid-cols-3 gap-6">
 *     {items.map((item) => (
 *       <StaggerItem key={item.id}><Card {...item} /></StaggerItem>
 *     ))}
 *   </Stagger>
 */
export function Stagger({
  children,
  className,
  amount = 0.15,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  staggerDelay?: number;
}) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 20,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? undefined : itemVariants}
    >
      {children}
    </motion.div>
  );
}
