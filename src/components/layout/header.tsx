"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, navItems } from "@/data/business";
import { useTheme } from "@/components/providers/theme-provider";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link className="wordmark" href="/" aria-label={`${business.name} home`}>{business.name}</Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .3 }}>
            {navItems.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .06 * index }}>
                <Link className={pathname === item.href ? "active" : ""} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
