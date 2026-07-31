import "./Services.css";

const services = [
  {
    number: "01",
    title: "Personal Coaching",
    description:
      "Ατομική προπόνηση με πρόγραμμα προσαρμοσμένο στους στόχους, το επίπεδο και τις ανάγκες σου.",
  },
  {
    number: "02",
    title: "Mini Group Training",
    description:
      "Προπόνηση σε μικρά και ελεγχόμενα γκρουπ, με συνεχή επίβλεψη και προσωπική καθοδήγηση.",
  },
  {
    number: "03",
    title: "Functional Training",
    description:
      "Δυναμική προπόνηση για δύναμη, αντοχή, κινητικότητα και καλύτερη λειτουργικότητα στην καθημερινότητα.",
  },
  {
    number: "04",
    title: "Weight Lifting",
    description:
      "Οργανωμένη προπόνηση με βάρη για ανάπτυξη δύναμης, μυϊκής μάζας και σωστής τεχνικής.",
  },
  {
    number: "05",
    title: "Sport Performance",
    description:
      "Εξειδικευμένη προπόνηση για αθλητές με έμφαση στην ταχύτητα, την εκρηκτικότητα και τη συνολική απόδοση.",
  },
  {
    number: "06",
    title: "Injury Recovery",
    description:
      "Σταδιακή και ελεγχόμενη επιστροφή στην άσκηση μετά από τραυματισμό, με ασφαλή προπονητική καθοδήγηση.",
  },
  {
    number: "07",
    title: "Open Gym",
    description:
      "Ελεύθερη προπόνηση στον χώρο του GETFIT XXV, με κράτηση μέσω της επίσημης εφαρμογής.",
  },
  {
    number: "08",
    title: "Friday Group Workout",
    description:
      "Ομαδική προπόνηση κάθε Παρασκευή με τον Στέφανο, με ενέργεια, καθοδήγηση και δυναμικό ομαδικό κλίμα.",
    isNew: true,
    hasBooking: true,
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <div>
            <p className="services__eyebrow">ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ</p>

            <h2 className="services__title">
              ΠΡΟΠΟΝΗΣΗ ΜΕ
              <span> ΣΚΟΠΟ.</span>
            </h2>
          </div>

          <p className="services__intro">
            Από την εξατομικευμένη καθοδήγηση μέχρι την αθλητική απόδοση,
            κάθε υπηρεσία είναι σχεδιασμένη για πραγματική εξέλιξη.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article
              className={`service-card ${
                service.isNew ? "service-card--featured" : ""
              }`}
              key={service.number}
            >
              <div className="service-card__top">
                <span className="service-card__number">
                  {service.number}
                </span>

                <span className="service-card__line" />

                {service.isNew && (
                  <span className="service-card__badge">ΝΕΟ</span>
                )}
              </div>

              <div className="service-card__content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {service.hasBooking && (
                  <a className="service-card__button" href="#app">
                    Κλείσε θέση
                    <span aria-hidden="true">↘</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;