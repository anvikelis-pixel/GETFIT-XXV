import "./Gallery.css";

import gallery01 from "../../../assets/images/gallery/gallery-01.jpg";
import gallery02 from "../../../assets/images/gallery/gallery-02.jpg";
import gallery03 from "../../../assets/images/gallery/gallery-03.jpg";
import gallery04 from "../../../assets/images/gallery/gallery-04.jpg";
import gallery05 from "../../../assets/images/gallery/gallery-05.jpg";
import gallery06 from "../../../assets/images/gallery/gallery-06.jpg";

const galleryItems = [
  {
    id: 1,
    image: gallery01,
    title: "Inside GETFIT XXV",
    category: "COMMUNITY",
    size: "large",
  },
  {
    id: 2,
    image: gallery02,
    title: "Functional Training",
    category: "FUNCTIONAL",
    size: "normal",
  },
  {
    id: 3,
    image: gallery03,
    title: "Strength Training",
    category: "STRENGTH",
    size: "tall",
  },
  {
    id: 4,
    image: gallery04,
    title: "Performance",
    category: "SPORT PERFORMANCE",
    size: "normal",
  },
  {
    id: 5,
    image: gallery05,
    title: "Personal Coaching",
    category: "PERSONAL TRAINING",
    size: "wide",
  },
  {
    id: 6,
    image: gallery06,
    title: "Inside GETFIT XXV",
    category: "THE SPACE",
    size: "normal",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <header className="gallery__header">
          <div>
            <p className="gallery__eyebrow">ΜΕΣΑ ΣΤΟ GETFIT XXV</p>

            <h2 className="gallery__title">
              ΔΕΣ ΤΗΝ
              <span> ΕΜΠΕΙΡΙΑ.</span>
            </h2>
          </div>

          <p className="gallery__intro">
            Πραγματικές στιγμές προπόνησης, ενέργειας και εξέλιξης μέσα από
            την καθημερινότητα του GETFIT XXV.
          </p>
        </header>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article
              className={`gallery-card gallery-card--${item.size}`}
              key={item.id}
            >
              <img
                className="gallery-card__image"
                src={item.image}
                alt={`${item.title} στο GETFIT XXV`}
                loading="lazy"
              />

              <div className="gallery-card__overlay" />

              <div className="gallery-card__content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>

              <span className="gallery-card__number">
                {String(item.id).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <div className="gallery__footer">
          <p>Ακολούθησε την καθημερινότητα του GETFIT XXV.</p>

          <a
            href="https://www.instagram.com/getfit_xxv/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;