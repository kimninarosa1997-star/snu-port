"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.history.replaceState(null, "", window.location.pathname);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex h-9 w-9 items-center justify-center border border-white text-xs font-bold tracking-widest"
        >
          JK
        </a>
        <nav className="flex gap-8 text-sm tracking-wide text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                const id = item.href.slice(1);
                const target = document.getElementById(id);
                if (!target) return;
                e.preventDefault();
                window.history.replaceState(null, "", item.href);
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
