"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/data/portfolio";

const DESKTOP_BREAKPOINT = 768;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsCondensed = window.scrollY > 24;
      setIsCondensed(nextIsCondensed);

      if (nextIsCondensed) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${isCondensed ? "is-condensed" : ""} ${
        isMenuOpen ? "is-menu-open" : ""
      }`}
    >
      <div className="container portfolio-container">
        <div className="site-header-inner">
          <div className="site-brand-wrap">
            <Link
              href="#top"
              className="site-brand text-decoration-none"
              onClick={closeMenu}
            >
              <span className="site-brand-name">Tanmay</span>
              <span className="site-brand-copy">Digital Portfolio</span>
            </Link>
          </div>

          <nav className="site-nav" aria-label="Primary">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-cta-wrap">
            <Link
              href="#contact"
              className="site-header-cta text-decoration-none"
              onClick={closeMenu}
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            className="site-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="site-menu-bar" />
            <span className="site-menu-bar" />
            <span className="site-menu-bar" />
          </button>
        </div>

        <div id="site-mobile-menu" className="site-mobile-menu">
          <nav className="site-mobile-nav" aria-label="Mobile">
            {navigationLinks.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="site-mobile-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="site-header-cta site-mobile-cta text-decoration-none"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
