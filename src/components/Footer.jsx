import React from "react";
import { Container } from "./UI";
import logo from "../assets/logoimg.jpg";

const Footer = () => {
  const links = [
    { label: "Kryefaqja", href: "#home" },
    { label: "Rreth Nesh", href: "#about" },
    { label: "Çfarë Bëjmë", href: "#impact" },
    { label: "Si të Ndihmoni", href: "#campaigns" },
    { label: "Kontakti", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src={logo}
                alt="Drita e Miresisë"
                className="footer__logo-img"
              />
              <span>Shoqata Humanitare Drita e Miresisë</span>
            </div>

            <p className="footer__tagline">
              Duke sjellë dritë dhe shpresë përmes solidaritetit dhe mirësisë.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer__links">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="footer__link">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Shoqata Humanitare Drita e Miresisë.
            Të gjitha të drejtat e rezervuara.
          </p>

          <div className="footer__social">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7.9V12h2.6V9.8c0-2.56 1.52-3.98 3.85-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.9h-2.4v7.05A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="6" />
                <circle cx="12" cy="12" r="4" fill="var(--dark)" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="var(--dark)" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
