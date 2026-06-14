"use client";

import { company } from "@/data/company";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 py-5 md:px-8">
        <a href="#" className="heading-display text-2xl tracking-widest text-text-primary">
          {company.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {company.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2.5 px-6 text-xs">
            Связаться
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/98 backdrop-blur-xl md:hidden">
          {company.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="heading-display text-3xl text-text-primary"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-4">
            Связаться
          </a>
        </div>
      )}
    </header>
  );
}
