import { ArrowUpRight, Dumbbell, HeartPulse, Users } from "lucide-react";
import "./Coaches.css";

const APP_URL =
  "https://apps.apple.com/gr/app/getfit-xxv/id6754255412?l=el";

const coachingAreas = [
  {
    id: "01",
    icon: Dumbbell,
    title: "Personal Coaching",
    description:
      "Εξατομικευμένη καθοδήγηση και προπονητικό πλάνο προσαρμοσμένο στους στόχους και στις ανάγκες κάθε ασκούμενου.",
  },
  {
    id: "02",
    icon: Users,
    title: "Group Training",
    description:
      "Μικρά και ελεγχόμενα τμήματα με διαρκή επίβλεψη, σωστή τεχνική και ουσιαστική προπονητική καθοδήγηση.",
  },
  {
    id: "03",
    icon: HeartPulse,
    title: "Performance & Recovery",
    description:
      "Προπόνηση αθλητικής απόδοσης και ελεγχόμενη επιστροφή στη δραστηριότητα μετά από τραυματισμό.",
  },
];

function Coaches() {
  return (
    <section className="coaches" id="coaches">
      <div className="coaches__container">
        <header className="coaches__header">
          <div>
            <p className="coaches__eyebrow">GETFIT XXV GYM</p>

            <h2 className="coaches__title">
              ΠΡΟΠΟΝΗΣΗ ΠΟΥ
              <span> ΚΑΝΕΙ ΤΗ ΔΙΑΦΟΡΑ.</span>
            </h2>
          </div>

          <p className="coaches__intro">
            Η σωστή προπόνηση δεν βασίζεται μόνο στην ένταση. Βασίζεται στη
            γνώση, στη συνέπεια και στην προσωπική καθοδήγηση.
          </p>
        </header>

        <div className="coaches__grid">
          {coachingAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="coach-card" key={area.id}>
                <div className="coach-card__visual">
                  <div className="coach-card__brand" aria-hidden="true">
                    <span>GETFIT</span>
                    <strong>XXV</strong>
                  </div>

                  <span className="coach-card__number">{area.id}</span>

                  <div className="coach-card__icon">
                    <Icon size={32} strokeWidth={1.6} />
                  </div>

                  <div className="coach-card__glow" />
                </div>

                <div className="coach-card__content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <a href="#contact" className="coach-card__link">
                    Επικοινώνησε μαζί μας
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="coaches__bottom">
          <p>
            Θέλεις να μάθεις ποιο πρόγραμμα ταιριάζει στους δικούς σου
            στόχους;
          </p>

          <a href={APP_URL} target="_blank" rel="noreferrer">
            Κλείσε την προπόνησή σου
            <ArrowUpRight size={19} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Coaches;