"use client";

import { createElement } from "react";
import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "h1",
}: TextRevealProps) {
  const words = text.split(" ");

  return createElement(
    as,
    { className },
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <span
            key={i}
            className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.06,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </>
  );
}
