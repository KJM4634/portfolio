"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { certifications, awards } from "@/lib/data/credentials";

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function CredentialList({
  title,
  items,
  open,
}: {
  title: string;
  items: { name: string; year: string }[];
  open: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {title}
      </p>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        className="mt-4 space-y-3"
      >
        {items.map((item) => (
          <motion.li
            key={item.name}
            variants={itemVariants}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex items-baseline justify-between gap-4 text-sm text-muted transition-colors duration-200 hover:text-accent"
          >
            <span>{item.name}</span>
            <span className="shrink-0 font-mono text-xs">{item.year}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default function CredentialsAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 border-t border-border pt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 text-left"
      >
        <div className="flex items-center gap-10">
          <div>
            <p className="font-heading text-3xl font-semibold text-accent transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
              {certifications.length}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">자격증</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold text-accent transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
              {awards.length}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">수상</p>
          </div>
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent/60 group-hover:text-accent">
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex"
          >
            <ChevronDown size={16} />
          </motion.span>
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="overflow-hidden"
      >
        <div className="grid gap-8 pt-8 sm:grid-cols-2">
          <CredentialList title="자격증" items={certifications} open={open} />
          <CredentialList title="수상" items={awards} open={open} />
        </div>
      </motion.div>
    </div>
  );
}
