"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.main initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }}>{children}</motion.main>;
}
