import { useEffect, useState } from "react";
import "./Navbar.css";

const APP_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const navigationItems = [
  {
    label: "Σχετικά",
    href: "#about",
  },
  {
    label: "Υπηρεσίες",
    href: "#services",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Gym",
    href: "#coaches",
  },
  {
    label: "Ραντεβού",
    href: "#app",
  },
  {
    label: "Κριτικές",
    href: "#reviews",
  },
  {
    label: "Επικοινωνία",
    href: "#contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
          id="navbar-menu"
          className={`navbar__menu ${
            isMenuOpen ? "navbar__menu--open" : ""
          }`}
          aria-label="Κύρια πλοήγηση"
        >
          {navigationItems.map((item, index) => (
            <a
              href={item.href}
              onClick={closeMenu}
              key={item.href}
              style={{
                "--menu-index": index,
              }}
            >
              {item.label}
            </a>
          ))}
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
            onClick={() => {
              setIsMenuOpen((current) => !current);
            }}
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