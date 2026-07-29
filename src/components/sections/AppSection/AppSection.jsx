import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

import "./AppSection.css";

const APP_STORE_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=gr.bookup.getfitxxv.www.twa";

const benefits = [
  "Κλείσε εύκολα την προπόνησή σου",
  "Δες το πρόγραμμά σου",
  "Διαχειρίσου τα ραντεβού σου",
  "Πρόσβαση από το κινητό σου",
];

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16.7 12.9c0-2.5 2-3.7 2.1-3.8a4.5 4.5 0 0 0-3.5-1.9c-1.5-.1-2.9.9-3.7.9-.8 0-2-1-3.3-.9a4.9 4.9 0 0 0-4.1 2.5c-1.8 3-.5 7.5 1.2 10 .9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-3.3-1.3-3.3-3.9ZM14.3 5.6c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.2 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.2-1.5Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.6 2.7a1.7 1.7 0 0 0-.4 1.2v16.2c0 .5.1.9.4 1.2l9.3-9.3-9.3-9.3Zm10.5 10.5-2.4-2.4 3-3 3.4 1.9c1 .6 1 1.4 0 2l-4 1.5Zm-2.4 0 2.4 2.4-6.7 3.8 4.3-4.3v-1.9Zm0-2.4L7.4 6.5l6.7 3.8-2.4 2.4Z" />
    </svg>
  );
}

function StoreButton({ href, label, title, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="app-section__store-link"
      aria-label={`${label} ${title}`}
    >
      <span className="app-section__store-icon">{icon}</span>

      <span className="app-section__store-copy">
        <small>{label}</small>
        <strong>{title}</strong>
      </span>

      <ArrowUpRight
        className="app-section__store-arrow"
        size={19}
        strokeWidth={2}
        aria-hidden="true"
      />
    </a>
  );
}

function AppSection() {
  return (
    <section className="app-section" id="app">
      <div className="app-section__container">
        <motion.div
          className="app-section__content"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="app-section__eyebrow">GETFIT XXV APP</p>

          <h2 className="app-section__title">
            Η ΠΡΟΠΟΝΗΣΗ ΣΟΥ
            <span> ΣΤΟ ΚΙΝΗΤΟ ΣΟΥ.</span>
          </h2>

          <p className="app-section__description">
            Μέσα από την επίσημη εφαρμογή του GETFIT XXV μπορείς να κάνεις
            κράτηση, να βλέπεις το πρόγραμμά σου και να διαχειρίζεσαι εύκολα
            τις προπονήσεις και τα ραντεβού σου.
          </p>

          <div className="app-section__benefits">
            {benefits.map((benefit) => (
              <div className="app-section__benefit" key={benefit}>
                <CheckCircle2 size={20} strokeWidth={1.8} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div
            className="app-section__store-badges"
            aria-label="Λήψη εφαρμογής GETFIT XXV"
          >
            <StoreButton
              href={APP_STORE_URL}
              label="Κατέβασέ το από το"
              title="App Store"
              icon={<AppleIcon />}
            />

            <StoreButton
              href={GOOGLE_PLAY_URL}
              label="Απόκτησέ το στο"
              title="Google Play"
              icon={<GooglePlayIcon />}
            />
          </div>
        </motion.div>

        <motion.div
          className="app-section__visual"
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.95,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="app-phone">
            <div className="app-phone__speaker" />

            <div className="app-phone__screen">
              <div className="app-phone__header">
                <div>
                  <span>GETFIT</span>
                  <strong>XXV</strong>
                </div>

                <Smartphone size={20} strokeWidth={1.8} />
              </div>

              <div className="app-phone__hero">
                <p>ΚΑΛΩΣ ΗΡΘΕΣ</p>
                <h3>Η ΠΡΟΠΟΝΗΣΗ ΣΟΥ ΞΕΚΙΝΑ ΕΔΩ.</h3>
              </div>

              <div className="app-phone__card">
                <div className="app-phone__card-icon">
                  <CalendarDays size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <span>ΕΠΟΜΕΝΗ ΠΡΟΠΟΝΗΣΗ</span>
                  <strong>Κλείσε θέση</strong>
                </div>
              </div>

              <div className="app-phone__schedule">
                <div>
                  <span>ΔΕΥ</span>
                  <strong>18:00</strong>
                </div>

                <div>
                  <span>ΤΡΙ</span>
                  <strong>20:00</strong>
                </div>

                <div>
                  <span>ΤΕΤ</span>
                  <strong>19:00</strong>
                </div>
              </div>

              <button type="button" tabIndex={-1}>
                Κλείσε προπόνηση
              </button>
            </div>
          </div>

          <div className="app-section__floating-card app-section__floating-card--top">
            <Smartphone size={21} strokeWidth={1.7} />

            <div>
              <span>GETFIT XXV</span>
              <strong>Official App</strong>
            </div>
          </div>

          <div className="app-section__floating-card app-section__floating-card--bottom">
            <CalendarDays size={21} strokeWidth={1.7} />

            <div>
              <span>ΕΥΚΟΛΗ ΚΡΑΤΗΣΗ</span>
              <strong>Όπου κι αν βρίσκεσαι</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AppSection;