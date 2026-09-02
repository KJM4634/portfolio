"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";

export default function SideDotNav() {
  const [active, setActive] = useState(navLinks[0].href);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.nav
      aria-label="섹션 이동"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      animate={{ opacity: visible ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {navLinks.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            aria-current={isActive}
            data-cursor-hover
            className="group relative flex h-4 w-4 items-center justify-center"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ? "scale-150 bg-accent" : "bg-border group-hover:bg-muted"
              }`}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-surface px-2 py-1 text-xs text-muted opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {link.label}
            </span>
          </a>
        );
      })}
    </motion.nav>
  );
}
