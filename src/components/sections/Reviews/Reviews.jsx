import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import "./Reviews.css";

const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=GETFIT+XXV+Geronymaki+25+Heraklion";

const reviews = [
  {
    id: "01",
    name: "charitomeni mina",
    rating: 5,
    text:
      "Ο Δημήτρης είναι επαγγελματίας, με γνώσεις και πραγματικό ενδιαφέρον για την πρόοδό σου. Με βοήθησε να βελτιώσω τη φυσική μου κατάσταση και να έχω σωστή τεχνική στις ασκήσεις. Ο χώρος είναι πολύ καθαρός και οργανωμένος, με σύγχρονα όργανα και ευχάριστο περιβάλλον.",
  },
  {
    id: "02",
    name: "Βαγγέλης Φρογάκης",
    rating: 5,
    text:
      "Το καλύτερο γυμναστήριο της πόλης. Εξειδικευμένο προσωπικό με τρομερές γνώσεις. Ιδανικό για εκγύμναση και για αποκατάσταση τραυματισμών.",
  },
  {
    id: "03",
    name: "Eleni Mta",
    rating: 5,
    text:
      "Από την πρώτη στιγμή που μπήκα στο GET FIT, εντυπωσιάστηκα από την καθαριότητα, τον σύγχρονο εξοπλισμό και τη φιλική ατμόσφαιρα. Το προσωπικό είναι εξαιρετικό και πάντα διαθέσιμο να βοηθήσει.",
  },
  {
    id: "04",
    name: "Maria Miliaraki",
    rating: 5,
    text:
      "Αν δεν ήταν ο Δημήτρης, δεν θα είχα αγαπήσει την προσπάθεια να γυμνάζομαι. Πάντα καθαρός ο χώρος, πάντα ευγενικός και επικεντρωμένος στις απαιτήσεις κάθε ασκούμενου.",
  },
  {
    id: "05",
    name: "Theodota Zikopoulou",
    rating: 5,
    text:
      "Καθαρός, προσεγμένος και πλήρως εξοπλισμένος χώρος που ανανεώνεται συνεχώς. Ο Δημήτρης είναι επαγγελματίας και κατανοεί τις ανάγκες μας, στοχεύοντας στη βελτίωση σε κάθε προπόνηση.",
  },
  {
    id: "06",
    name: "marianna georgakopoulou",
    rating: 5,
    text:
      "Σύγχρονος χώρος εκγύμνασης, καθαρός και άρτια εξοπλισμένος. Τα προγράμματα είναι εξατομικευμένα και δίνεται προσοχή στις ανάγκες κάθε αθλούμενου.",
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
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function StarRating({ rating = 5, size = 18 }) {
  return (
    <div
      className="reviews__stars"
      aria-label={`Αξιολόγηση ${rating} από 5 αστέρια`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          strokeWidth={1.8}
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function Reviews() {
  const featuredReview = reviews[0];
  const cardReviews = reviews.slice(1, 4);

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <motion.header
          className="reviews__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={itemVariants}>
            <p className="reviews__eyebrow">
              ΠΡΑΓΜΑΤΙΚΕΣ ΚΡΙΤΙΚΕΣ GOOGLE
            </p>

            <h2 className="reviews__title">
              Η ΕΜΠΙΣΤΟΣΥΝΗ
              <span> ΧΤΙΖΕΤΑΙ ΚΑΘΕ ΜΕΡΑ.</span>
            </h2>
          </motion.div>

          <motion.p
            className="reviews__intro"
            variants={itemVariants}
          >
            Αυθεντικές αξιολογήσεις μελών που μοιράζονται την εμπειρία τους
            από το GETFIT XXV.
          </motion.p>
        </motion.header>

        <div className="reviews__layout">
          <motion.article
            className="reviews__featured"
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="reviews__featured-top">
              <div className="reviews__google-label">
                <span>G</span>

                <div>
                  <p>Google Reviews</p>
                  <small>GETFIT XXV GYM</small>
                </div>
              </div>

              <Quote
                className="reviews__quote-icon"
                size={46}
                strokeWidth={1.35}
              />
            </div>

            <div className="reviews__rating">
              <strong>4.9</strong>

              <div>
                <StarRating rating={5} size={20} />
                <p>89 αξιολογήσεις στο Google</p>
              </div>
            </div>

            <blockquote>«{featuredReview.text}»</blockquote>

            <div className="reviews__featured-footer">
              <div>
                <span>{featuredReview.name}</span>
                <strong>★★★★★</strong>
              </div>

              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Δες στο Google
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>
          </motion.article>

          <motion.div
            className="reviews__cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cardReviews.map((review) => (
              <motion.article
                className="review-card"
                key={review.id}
                variants={itemVariants}
              >
                <div className="review-card__top">
                  <span className="review-card__number">
                    {review.id}
                  </span>

                  <Quote size={23} strokeWidth={1.7} />
                </div>

                <StarRating rating={review.rating} />

                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;