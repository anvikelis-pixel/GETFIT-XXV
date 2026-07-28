import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Clock3,
  Globe,
  MapPin,
  Navigation,
  Phone,
  Smartphone,
} from "lucide-react";

import appStoreBadge from "../../../assets/images/app/app-store-badge.png";
import googlePlayBadge from "../../../assets/images/app/google-play-badge.png";

import "./Contact.css";

const PHONE_DISPLAY = "2815 202141";
const PHONE_URL = "tel:+302815202141";

const APP_STORE_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=gr.bookup.getfitxxv.www.twa";

const INSTAGRAM_URL = "https://www.instagram.com/getfit_xxv/";
const FACEBOOK_URL = "https://www.facebook.com/Getfitxxv/";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=GETFIT+XXV+Geronymaki+25+Heraklion";

const openingHours = [
  {
    day: "Δευτέρα",
    hours: "14:00 – 22:30",
  },
  {
    day: "Τρίτη",
    hours: "09:00 – 22:30",
  },
  {
    day: "Τετάρτη",
    hours: "09:00 – 22:30",
  },
  {
    day: "Πέμπτη",
    hours: "09:00 – 22:30",
  },
  {
    day: "Παρασκευή",
    hours: "09:00 – 20:00",
  },
  {
    day: "Σάββατο",
    hours: "09:00 – 13:00",
  },
  {
    day: "Κυριακή",
    hours: "Κλειστά",
    closed: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.header
          className="contact__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <p className="contact__eyebrow">ΕΠΙΚΟΙΝΩΝΙΑ</p>

            <h2 className="contact__title">
              ΚΑΝΕ ΤΟ
              <span> ΠΡΩΤΟ ΒΗΜΑ.</span>
            </h2>
          </motion.div>

          <motion.p className="contact__intro" variants={itemVariants}>
            Επικοινώνησε με το GETFIT XXV, βρες τον χώρο ή κατέβασε την
            εφαρμογή για να κλείσεις την επόμενη προπόνησή σου.
          </motion.p>
        </motion.header>

        <div className="contact__layout">
          <motion.div
            className="contact__map-column"
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="contact__map">
              <iframe
                title="Τοποθεσία GETFIT XXV"
                src="https://www.google.com/maps?q=GETFIT%20XXV%20Geronymaki%2025%20Heraklion&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="contact__map-overlay" />

              <div className="contact__map-badge">
                <MapPin size={21} strokeWidth={1.8} />

                <div>
                  <span>GETFIT XXV</span>
                  <strong>Γερωνυμάκη 25, Ηράκλειο</strong>
                </div>
              </div>
            </div>

            <a
              className="contact__directions"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={20} strokeWidth={1.9} />

              <div>
                <span>GOOGLE MAPS</span>
                <strong>Πάρε οδηγίες</strong>
              </div>

              <ArrowUpRight size={20} strokeWidth={2} />
            </a>
          </motion.div>

          <motion.div
            className="contact__details"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
          >
            <motion.article
              className="contact-card contact-card--phone"
              variants={itemVariants}
            >
              <div className="contact-card__icon">
                <Phone size={25} strokeWidth={1.8} />
              </div>

              <div className="contact-card__content">
                <span>ΤΗΛΕΦΩΝΟ ΕΠΙΚΟΙΝΩΝΙΑΣ</span>
                <a href={PHONE_URL}>{PHONE_DISPLAY}</a>
                <p>Πάτησε τον αριθμό για άμεση κλήση.</p>
              </div>

              <a
                className="contact-card__arrow"
                href={PHONE_URL}
                aria-label="Κάλεσε το GETFIT XXV"
              >
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
            </motion.article>

            <motion.article
              className="contact-card contact-card--app"
              variants={itemVariants}
            >
              <div className="contact-card__icon">
                <Smartphone size={25} strokeWidth={1.8} />
              </div>

              <div className="contact-card__content">
                <span>GETFIT XXV APP</span>
                <strong>Κλείσε την προπόνησή σου</strong>
                <p>
                  Κατέβασε την εφαρμογή σε iPhone ή Android και διαχειρίσου
                  εύκολα τις προπονήσεις σου.
                </p>

                <div className="contact-card__store-badges">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card__store-link"
                    aria-label="Κατέβασε το GETFIT XXV από το App Store"
                  >
                    <img
                      src={appStoreBadge}
                      alt="Download on the App Store"
                    />
                  </a>

                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card__store-link"
                    aria-label="Κατέβασε το GETFIT XXV από το Google Play"
                  >
                    <img
                      src={googlePlayBadge}
                      alt="Get it on Google Play"
                    />
                  </a>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="contact-card contact-card--address"
              variants={itemVariants}
            >
              <div className="contact-card__icon">
                <MapPin size={25} strokeWidth={1.8} />
              </div>

              <div className="contact-card__content">
                <span>ΔΙΕΥΘΥΝΣΗ</span>
                <strong>Γερωνυμάκη 25</strong>
                <p>Ηράκλειο Κρήτης, 71306</p>
              </div>

              <a
                className="contact-card__arrow"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Οδηγίες προς GETFIT XXV"
              >
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
            </motion.article>

            <motion.article
              className="contact__hours"
              variants={itemVariants}
            >
              <div className="contact__hours-heading">
                <div className="contact-card__icon">
                  <Clock3 size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <span>ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ</span>
                  <strong>Πότε θα μας βρεις</strong>
                </div>
              </div>

              <div className="contact__hours-list">
                {openingHours.map((item) => (
                  <div
                    className={`contact__hours-row ${
                      item.closed ? "contact__hours-row--closed" : ""
                    }`}
                    key={item.day}
                  >
                    <span>{item.day}</span>
                    <strong>{item.hours}</strong>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.div
              className="contact__socials"
              variants={itemVariants}
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram GETFIT XXV"
              >
                <Camera size={21} strokeWidth={1.8} />
                <span>Instagram</span>
                <ArrowUpRight size={17} strokeWidth={2} />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook GETFIT XXV"
              >
                <Globe size={21} strokeWidth={1.8} />
                <span>Facebook</span>
                <ArrowUpRight size={17} strokeWidth={2} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="contact__cta"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="contact__cta-icon">
            <CalendarDays size={28} strokeWidth={1.7} />
          </div>

          <div>
            <span>ΕΤΟΙΜΟΣ ΝΑ ΞΕΚΙΝΗΣΕΙΣ;</span>
            <h3>Κλείσε τώρα την επόμενη προπόνησή σου.</h3>
          </div>

          <div className="contact__cta-actions">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              App Store
              <ArrowUpRight size={18} strokeWidth={2} />
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Google Play
              <ArrowUpRight size={18} strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;