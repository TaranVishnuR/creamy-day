import styles from "./About.module.css";
import creamydayLogo from "../../assets/images/creamyday.png";
import loveinLogo from "../../assets/images/lovein.png";

export function About() {
  const trustCards = [
    {
      badge: "Premium",
      title: "Quality Ingredients",
      desc: "Made with trusted dairy and premium ingredients",
    },
    {
      badge: "Safe",
      title: "Hygienic Standards",
      desc: "Prepared with strict food safety practices",
    },
    {
      badge: "Fast",
      title: "Quick Service",
      desc: "Designed for efficient customer experience",
    },
    {
      badge: "Value",
      title: "Affordable Pricing",
      desc: "Premium taste at accessible prices",
    },
    {
      badge: "Modern",
      title: "Kiosk Concept",
      desc: "Sleek store design for any location setup",
    },
  ];

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={`${styles.blob} ${styles.blobTopRight}`} />
      <div className={`${styles.blob} ${styles.blobBottomLeft}`} />

      <div className={styles.aboutMaxWrapper}>
        
        <div className={styles.labelCenterWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeText}>About Our Brands</span>
          </div>
        </div>

        {/* Creamy Day */}
        <div className={styles.brandRowGrid} id="creamyday">
          <div className={styles.imageFlexBox}>
            <img
              src={creamydayLogo}
              alt="Creamy Day Logo"
              className={styles.brandLogoGraphic}
              loading="lazy"
            />
          </div>

          <div className={styles.textBlockColumn}>
            <h2 className={styles.brandHeading}>Creamy Day</h2>

            <div className={styles.brandTagline}>
              "Melt The Moment"
            </div>

            <p className={styles.brandParagraph}>
              Creamy Day Foods is the foundation behind our dessert ecosystem,
              focused on delivering exceptional frozen treats through quality
              ingredients, production excellence, food safety, and continuous
              flavour innovation.
            </p>

            <p className={styles.brandParagraph}>
              Our mission is to transform everyday moments into memorable
              experiences through premium dessert products.
            </p>
          </div>
        </div>

        <div className={styles.horizontalDividerLine} />

        {/* LOVE in */}
        <div
          id="lovein"
          className={`${styles.brandRowGrid} ${styles.brandRowGridReverse}`}
        >
          <div
            className={`${styles.textBlockColumn} ${styles.textOrderMobile}`}
          >
            <h2 className={styles.brandHeading}>LOVE in</h2>

            <div className={styles.brandTagline}>
              "Fall In Flavours"
            </div>

            <p className={styles.brandParagraph}>
              <strong className={styles.boldTextEmphasis}>
                LOVE in by Creamy Day Foods
              </strong>{" "}
              is a premium dessert brand created to bring joy, quality, and
              unforgettable taste experiences to students, families, and
              dessert lovers.
            </p>

            <p
              className={`${styles.brandParagraph} ${styles.textOpacityReduce}`}
            >
              Our menu features Softy Ice Creams, Thick Milkshakes, Sundaes,
              Fruit Desserts and Seasonal Specials made using carefully
              selected ingredients.
            </p>

            <p
              className={`${styles.brandParagraph} ${styles.textOpacityReduce}`}
            >
              Built around a modern kiosk concept, LOVE in offers a welcoming
              destination where customers can enjoy premium treats at
              affordable prices.
            </p>
          </div>

          <div className={styles.imageFlexBox}>
            <img
              src={loveinLogo}
              alt="LOVE in Logo"
              className={styles.brandLogoGraphic}
              loading="lazy"
            />
          </div>
        </div>

        {/* Trust Cards */}
        <div className={styles.trustGridContainer}>
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className={styles.trustCardItem}
            >
              <span className={styles.cardBadgeLabel}>
                {card.badge}
              </span>

              <h4 className={styles.cardTitleText}>
                {card.title}
              </h4>

              <p className={styles.cardDescText}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;