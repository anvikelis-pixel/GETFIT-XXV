import { useEffect, useState } from "react";
import "./Navbar.css";

const APP_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          aria-label="GETFIT XXV - Αρχική σελίδα"
          onClick={closeMenu}
        >
          <span className="navbar__logo-getfit">GETFIT</span>
          <span className="navbar__logo-xxv">XXV</span>
        </a>

        <nav
          className={`navbar__menu ${
            isMenuOpen ? "navbar__menu--open" : ""
          }`}
          aria-label="Κύρια πλοήγηση"
        >
          <a href="#about" onClick={closeMenu}>
            Σχετικά
          </a>

          <a href="#services" onClick={closeMenu}>
            Υπηρεσίες
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#app" onClick={closeMenu}>
            Πρόγραμμα
          </a>

          <a href="#reviews" onClick={closeMenu}>
            Κριτικές
          </a>

          <a href="#contact" onClick={closeMenu}>
            Επικοινωνία
          </a>
        </nav>

        <div className="navbar__actions">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="navbar__button"
          >
            Κλείσε προπόνηση
          </a>

          <button
            type="button"
            className={`navbar__toggle ${
              isMenuOpen ? "navbar__toggle--open" : ""
            }`}
            aria-label={
              isMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"
            }
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;