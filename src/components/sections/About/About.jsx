import { motion } from "framer-motion";
import { ArrowUpRight, Target, Users, TrendingUp } from "lucide-react";
import "./About.css";
import aboutImage from "../../../assets/images/about/about-main.jpg";

const features = [
  {
    id: "01",
    icon: Target,
    title: "Εξατομικευμένη προσέγγιση",
    text: "Προπόνηση προσαρμοσμένη στο επίπεδο, στις ανάγκες και στους προσωπικούς σου στόχους.",
  },
  {
    id: "02",
    icon: Users,
    title: "Μικρά γκρουπ",
    text: "Ελεγχόμενα τμήματα με συνεχή επίβλεψη, σωστή τεχνική και ουσιαστική καθοδήγηση.",
  },
  {
    id: "03",
    icon: TrendingUp,
    title: "Πραγματική εξέλιξη",
    text: "Μεθοδική δουλειά, συνέπεια και προπονητική φιλοσοφία βασισμένη στην απόδοση.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.p className="about__eyebrow" variants={itemVariants}>
            ΣΧΕΤΙΚΑ ΜΕ ΤΟ GETFIT XXV
          </motion.p>

          <motion.h2 className="about__title" variants={itemVariants}>
            ΠΕΡΙΣΣΟΤΕΡΟ ΑΠΟ
            <span> ΕΝΑ ΓΥΜΝΑΣΤΗΡΙΟ.</span>
          </motion.h2>

          <motion.p className="about__description" variants={itemVariants}>
            Το GETFIT XXV είναι ένας σύγχρονος χώρος προπόνησης στο Ηράκλειο,
            σχεδιασμένος για ανθρώπους που θέλουν να εξελιχθούν μέσα από σωστή
            καθοδήγηση, συνέπεια και πραγματική δουλειά.
          </motion.p>

          <motion.p className="about__description" variants={itemVariants}>
            Η προπονητική προσέγγιση βασίζεται στην ποιότητα της κίνησης, στην
            προσωπική επίβλεψη και σε ένα περιβάλλον που βοηθά κάθε μέλος να
            ξεπερνά σταδιακά τα όριά του.
          </motion.p>

          <motion.div className="about__features" variants={itemVariants}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="about-feature" key={feature.id}>
                  <div className="about-feature__number">{feature.id}</div>

                  <div className="about-feature__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="about-feature__content">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </motion.div>

          <motion.a
            className="about__cta"
            href="#services"
            variants={itemVariants}
          >
            Ανακάλυψε τις υπηρεσίες
            <ArrowUpRight size={19} strokeWidth={2} />
          </motion.a>
        </motion.div>

        <motion.div
          className="about__media"
          initial={{ opacity: 0, scale: 0.94, y: 45 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about__image-frame">
            <img
              className="about__image"
              src={aboutImage}
              alt="Ο χώρος του GETFIT XXV στο Ηράκλειο"
              loading="lazy"
            />

            <div className="about__image-overlay" />

            <div className="about__brand-badge">
              <span>GETFIT</span>
              <strong>XXV</strong>
            </div>

            <div className="about__location">
              <span>ΗΡΑΚΛΕΙΟ</span>
              <strong>ΚΡΗΤΗΣ</strong>
            </div>
          </div>

          <div className="about__decorative-line" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;