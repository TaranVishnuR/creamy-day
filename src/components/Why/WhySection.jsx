import styles from "./WhySection.module.css";
import {
  FaCoins,
  FaIceCream,
  FaTruck,
  FaHandshake
} from "react-icons/fa";

export function WhySection() {
  const cards = [
    {
      icon: <FaCoins />,
      title: "Affordable Investment",
      desc:
        "A low-investment dessert business model designed for faster setup, lower operational costs, and attractive profit potential."
    },
    {
      icon: <FaIceCream />,
      title: "Standard Flavours",
      desc:
        "Customer-favourite flavours including Vanilla, Chocolate, Strawberry, Mango, Sundaes, Milkshakes and seasonal specials."
    },
    {
      icon: <FaTruck />,
      title: "Transportable Store Model",
      desc:
        "Compact and flexible kiosk formats suitable for colleges, malls, food courts and events."
    },
    {
      icon: <FaHandshake />,
      title: "Complete Franchise Support",
      desc:
        "From setup and staff training to marketing assistance, we support our partners at every stage."
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyMaxWrapper}>

        <div className={styles.whyHeader}>
          <div className={styles.whySectionBadge}>
            <span className={styles.badgeText}>
              Why Choose Us
            </span>
          </div>

          <h2 className={styles.whyHeading}>
            The Love In{" "}
            <span className={styles.italicText}>
              Difference
            </span>
          </h2>

          <p className={styles.whySubtitle}>
            We don't just make ice cream — we create
            memorable dessert experiences.
          </p>
        </div>

        <div className={styles.whyCardsGrid}>
          {cards.map((card, i) => (
            <div key={i} className={styles.whyCardItem}>

              

              <div
                className={`${styles.iconContainer}
                ${
                  i % 2 === 0
                    ? styles.iconBgCoral
                    : styles.iconBgGolden
                }`}
              >
                {card.icon}
              </div>

              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>

              <p className={styles.cardDesc}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhySection;