"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps {
  /** Content to animate in. */
  children: ReactNode;
  /** Which way the content travels in from. Default "up". */
  direction?: Direction;
  /** Seconds to wait before starting. Default 0. */
  delay?: number;
  /** Animation length in seconds. Default 0.6. */
  duration?: number;
  /** Distance (px) traveled during the animation. Default 24. */
  distance?: number;
  /** Replay every time it scrolls into view instead of once. Default false. */
  repeat?: boolean;
  /** Portion of the element that must be visible before it triggers, 0-1. Default 0.2. */
  amount?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "article";
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

/**
 * Reusable, non-blocking scroll-in animation.
 *
 * Content always renders immediately (server-side and with JS disabled) —
 * this only animates opacity/position on top of it, it never hides content
 * behind a spinner or delays paint the way a page-level preloader does.
 *
 * Usage: <FadeIn direction="up" delay={0.1}><Card /></FadeIn>
 */
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 24,
  repeat = false,
  amount = 0.2,
  className,
  as = "div",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ? offset.x * distance : 0,
      y: offset.y ? offset.y * distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: !repeat, amount }}
      variants={prefersReducedMotion ? undefined : variants}
    >
      {children}
    </MotionTag>
  );
}
