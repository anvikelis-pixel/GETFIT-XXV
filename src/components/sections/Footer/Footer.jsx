import {
  ArrowUp,
  ArrowUpRight,
  Camera,
  Globe,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import "./Footer.css";

const APP_STORE_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=gr.bookup.getfitxxv.www.twa";

const INSTAGRAM_URL = "https://www.instagram.com/getfit_xxv/";
const FACEBOOK_URL = "https://www.facebook.com/Getfitxxv/";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=GETFIT+XXV+Geronymaki+25+Heraklion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand-column">
            <a
              href="#home"
              className="footer__logo"
              aria-label="GETFIT XXV - Επιστροφή στην αρχική"
            >
              <span>GETFIT</span>
              <strong>XXV</strong>
            </a>

            <p>
              Premium προπόνηση, προσωπική καθοδήγηση και πραγματική εξέλιξη
              στο Ηράκλειο Κρήτης.
            </p>

            <div className="footer__store-links">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="footer__store-link"
                aria-label="Κατέβασε το GETFIT XXV από το App Store"
              >
                <Smartphone size={19} strokeWidth={1.8} />

                <div>
                  <span>Διαθέσιμο στο</span>
                  <strong>App Store</strong>
                </div>

                <ArrowUpRight size={18} strokeWidth={2} />
              </a>

              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="footer__store-link"
                aria-label="Κατέβασε το GETFIT XXV από το Google Play"
              >
                <Smartphone size={19} strokeWidth={1.8} />

                <div>
                  <span>Διαθέσιμο στο</span>
                  <strong>Google Play</strong>
                </div>

                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="footer__links-column">
            <span className="footer__label">ΠΛΟΗΓΗΣΗ</span>

            <nav className="footer__nav" aria-label="Πλοήγηση footer">
              <a href="#about">Σχετικά</a>
              <a href="#services">Υπηρεσίες</a>
              <a href="#gallery">Gallery</a>
              <a href="#app">Πρόγραμμα</a>
              <a href="#reviews">Κριτικές</a>
              <a href="#contact">Επικοινωνία</a>
            </nav>
          </div>

          <div className="footer__contact-column">
            <span className="footer__label">ΕΠΙΚΟΙΝΩΝΙΑ</span>

            <div className="footer__contact-list">
              <a href="tel:+302815202141">
                <Phone size={18} strokeWidth={1.8} />

                <div>
                  <span>Τηλέφωνο</span>
                  <strong>2815 202141</strong>
                </div>
              </a>

              <a href={MAP_URL} target="_blank" rel="noreferrer">
                <MapPin size={18} strokeWidth={1.8} />

                <div>
                  <span>Διεύθυνση</span>
                  <strong>Γερωνυμάκη 25, Ηράκλειο</strong>
                </div>
              </a>
            </div>

            <div className="footer__socials">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram GETFIT XXV"
                title="Instagram"
              >
                <Camera size={20} strokeWidth={1.8} />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook GETFIT XXV"
                title="Facebook"
              >
                <Globe size={20} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            © {currentYear} GETFIT XXV. Όλα τα δικαιώματα διατηρούνται.
          </p>

          <p className="footer__credit">
            Designed &amp; developed for GETFIT XXV
          </p>

          <a
            href="#home"
            className="footer__back-to-top"
            aria-label="Επιστροφή στην κορυφή"
            title="Επιστροφή στην κορυφή"
          >
            <ArrowUp size={19} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;