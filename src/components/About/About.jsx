import { motion } from "framer-motion";
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

  // Shared scroll viewport configuration options
  const scrollAnimateProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.aboutMaxWrapper}>
        
        <motion.div 
          className={styles.labelCenterWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.sectionBadge}>
            <span className={styles.badgeText}>About Our Brands</span>
          </div>
        </motion.div>

        {/* Creamy Day */}
        <div id="creamyday" className={styles.brandRowGrid}>
          {/* Logo container placed as a direct child of the grid for desktop side-by-side splits */}
          <motion.div 
            className={`${styles.imageFlexBox} ${styles.creamyLogoMobile}`}
            {...scrollAnimateProps}
          >
            <img
              src={creamydayLogo}
              alt="Creamy Day Logo"
              className={styles.brandLogoGraphic}
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            className={`${styles.textBlockColumn} ${styles.textOrderMobile}`}
            {...scrollAnimateProps}
          >
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
          </motion.div>
        </div>

        <div className={styles.horizontalDividerLine} />

        {/* LOVE in */}
        <div id="lovein" className={`${styles.brandRowGrid} ${styles.brandRowGridReverse}`}>
          {/* Text block container comes first, placing it on the left side on desktop screens */}
          <motion.div 
            className={`${styles.textBlockColumn} ${styles.textOrderMobile}`}
            {...scrollAnimateProps}
            transition={{ ...scrollAnimateProps.transition, delay: 0.1 }}
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

            <p className={styles.brandParagraph}>
              Our menu features Softy Ice Creams, Thick Milkshakes, Sundaes,
              Fruit Desserts and Seasonal Specials made using carefully
              selected ingredients.
            </p>

            <p className={styles.brandParagraph}>
              Built around a modern kiosk concept, LOVE in offers a welcoming
              destination where customers can enjoy premium treats at
              affordable prices.
            </p>
          </motion.div>

          {/* Logo wrapper container comes second, placing it on the right side on desktop screens */}
          <motion.div 
            className={`${styles.imageFlexBox} ${styles.imageLastMobile}`}
            {...scrollAnimateProps}
            transition={{ ...scrollAnimateProps.transition, delay: 0.1 }}
          >
            <img
              src={loveinLogo}
              alt="LOVE in Logo"
              className={styles.brandLogoGraphic}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Trust Cards Grid */}
        <div className={styles.trustGridContainer}>
          {trustCards.map((card, idx) => (
            <motion.div 
              key={idx} 
              className={styles.trustCardItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
