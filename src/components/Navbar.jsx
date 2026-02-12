import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logoimg.jpg";

const NAV_HEIGHT = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // (optional) lock background scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const links = [
    { label: "Kryefaqja", href: "#home" },
    { label: "Rreth Nesh", href: "#about" },
    { label: "Çfarë Bëjmë", href: "#impact" },
    { label: "Si të Ndihmoni", href: "#campaigns" },
    { label: "Kontakti", href: "#contact" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });

    // helps some mobile browsers keep the right state
    window.location.hash = `#${id}`;
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");

    // 1) close menu first (mobile)
    setMobileOpen(false);

    // 2) wait for layout to settle (Framer height animation), then scroll
    requestAnimationFrame(() => {
      setTimeout(() => scrollToId(id), 120);
    });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__container">
        <a
          className="navbar__logo"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <img src={logo} alt="Drita e Miresisë" className="navbar__logo-img" />
          <span>Shoqata Drita e Miresisë</span>
        </a>

        <div className="navbar__links">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
