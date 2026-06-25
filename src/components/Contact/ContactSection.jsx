import styles from "./ContactSection.module.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart
} from "react-icons/fa";

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Our Store",
      lines: [
        "Love In",
        "Unjavelampatti",
        "Pollachi, Tamil Nadu 641003"
      ]
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Direct",
      lines: [
        "+91 95978 74897",
        "+91 96268 32771",
        "Mon - Sun: 11 AM - 11 PM"
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      lines: [
        "Creamyday.foods@gmail.com"
      ]
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
    <>
      <section
        id="contact"
        className={styles.sectionContainer}
      >
        <div className={styles.maxWrapper}>

          <motion.div
            className={styles.sectionHeader}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3
            }}
          >
            <div className={styles.sectionBadge}>
              <span className={styles.badgeText}>
                Get In Touch
              </span>
            </div>

            <h2 className={styles.sectionTitle}>
              Let's Start A{" "}
              <span className={styles.italicTitle}>
                Sweet
              </span>{" "}
              Conversation
            </h2>

            <p className={styles.headerDescription}>
              Whether you're a franchise partner,
              investor, or simply curious about
              Love In — we'd love to hear from you.
            </p>
          </motion.div>

          <div className={styles.infoCardsRowGrid}>
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className={styles.infoCardItem}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
              >
                <div className={styles.infoFlexBox}>
                  <motion.div
                    className={styles.infoIcon}
                    whileHover={{
                      rotate: 10,
                      scale: 1.15
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {info.icon}
                  </motion.div>

                  <div className={styles.infoTextContent}>
                    <h4 className={styles.infoCardTitle}>
                      {info.title}
                    </h4>

                    {info.lines.map((line, i) => (
                      <div
                        key={i}
                        className={styles.infoCardLine}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <motion.footer
        className={styles.footerContainer}
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.8
        }}
      >
        <div className={styles.footerWrapper}>
          <div className={styles.copyrightText}>
            © {currentYear} Creamy Day Foods.
            All Rights Reserved.
          </div>

          <div className={styles.byText}>
            Made by{" "}
            <span className={styles.authorName}>
              Taran Vishnu
            </span>
            {" "}with
            <span className={styles.floatingHeart}>
              <FaHeart />
            </span>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default ContactSection;