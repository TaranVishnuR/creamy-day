import styles from "./WhySection.module.css";
import { motion } from "framer-motion";
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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7
      }
    })
  };

  return (
    <section className={styles.whySection}>
      <div className={styles.whyMaxWrapper}>

        <motion.div
          className={styles.whyHeader}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>

        <div className={styles.whyCardsGrid}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={styles.whyCardItem}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1
                }}
                transition={{
                  type: "spring",
                  stiffness: 300
                }}
                className={`${styles.iconContainer}
                ${
                  i % 2 === 0
                    ? styles.iconBgCoral
                    : styles.iconBgGolden
                }`}
              >
                {card.icon}
              </motion.div>

              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>

              <p className={styles.cardDesc}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhySection;