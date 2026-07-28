import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

import appStoreBadge from "../../../assets/images/app/app-store-badge.png";
import googlePlayBadge from "../../../assets/images/app/google-play-badge.png";

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
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="app-section__store-link"
              aria-label="Κατέβασε το GETFIT XXV από το App Store"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="app-section__store-image"
              />
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="app-section__store-link"
              aria-label="Κατέβασε το GETFIT XXV από το Google Play"
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="app-section__store-image"
              />
            </a>
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