import { motion } from "framer-motion";
import "./Hero.css";
import heroBackground from "../../../assets/images/hero/hero-background.png";

const APP_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const PHONE_URL = "tel:+302815202141";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.img
        className="hero__background"
        src={heroBackground}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="hero__overlay" />
      <div className="hero__light" />
      <div className="hero__noise" />

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__eyebrow" variants={itemVariants}>
          <span>GETFIT</span>
          <strong>XXV</strong>
          <span>· ΗΡΑΚΛΕΙΟ ΚΡΗΤΗΣ</span>
        </motion.p>

        <motion.h1 className="hero__title" variants={itemVariants}>
          <span className="hero__title-line">
            TRAIN WITH PURPOSE.
          </span>

          <span className="hero__title-line hero__title-line--muted">
            PERFORM WITHOUT LIMITS.
          </span>
        </motion.h1>

        <motion.p className="hero__description" variants={itemVariants}>
          Premium προπόνηση, Personal Coaching, Sport Performance και
          Functional Training σε έναν χώρο σχεδιασμένο για πραγματική
          εξέλιξη.
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="hero__button hero__button--primary"
          >
            <span>Κλείσε την προπόνησή σου</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={PHONE_URL}
            className="hero__button hero__button--secondary"
            aria-label="Κάλεσε το GETFIT XXV στο 2815 202141"
          >
            <span>Κάλεσέ μας</span>
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        className="hero__scroll"
        href="#about"
        aria-label="Μετάβαση στην επόμενη ενότητα"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.8 }}
      >
        <span className="hero__scroll-text">Scroll</span>

        <span className="hero__scroll-mouse">
          <span className="hero__scroll-wheel" />
        </span>
      </motion.a>

      <div className="hero__bottom-fade" />
    </section>
  );
}

export default Hero;