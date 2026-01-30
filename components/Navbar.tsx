"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
  // { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Navbar bar */}
      <header className="navbar">
        <div className="navbar-inner">

          {/* Logo */}
          <div className="navbar-logo text-lg">
            Puneeth<span className="text-[var(--accent)]">.</span>
          </div>

          {/* Desktop links */}
          <nav className="navbar-links">
            {links.map(link => (
              <a key={link.label} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="navbar-mobile-btn md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <aside className={`nav-drawer ${open ? "open" : ""}`}>
        <div className="nav-drawer-content">

          {/* Close button */}
          <button
            className="self-end navbar-mobile-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Links */}
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-drawer-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
