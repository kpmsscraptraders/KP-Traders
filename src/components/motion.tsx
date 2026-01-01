"use client";

import { useRef } from "react";
import { motion, type Variants, useInView, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
      whileInView={
        reduce
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        ease: [0.2, 0.8, 0.2, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0
}: StaggerProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  const variants: Variants = {
    hidden: {},
    show: reduce
      ? {}
      : {
          transition: { staggerChildren: stagger, delayChildren }
        }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 10, filter: "blur(6px)" },
    show: reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}


