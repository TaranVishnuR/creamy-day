import styles from "./ContactSection.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeart } from "react-icons/fa";

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Our Store",
      lines: ["Love In", "Unjavelampatti", "Pollachi, Tamil Nadu 641003"],
      isCoral: true
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Direct",
      lines: ["+91 95978 74897", "+91 96268 32771", "Mon - Sun: 11 AM - 11 PM"],
      isCoral: false
    },
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      lines: ["Creamyday.foods@gmail.com"],
      isCoral: true
    },
  ];

  return (
    <>
      <section id="contact" className={styles.sectionContainer}>
        <div className={styles.maxWrapper}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeText}>Get In Touch</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Let's Start A <span className={styles.italicTitle}>Sweet</span> Conversation
            </h2>
            <p className={styles.headerDescription}>
              Whether you're a franchise partner, investor, or simply curious about Love In — we'd love to hear from you.
            </p>
          </div>

          <div className={styles.infoCardsRowGrid}>
            {contactInfo.map((info, idx) => (
              <div key={idx} className={styles.infoCardItem}>
                
                <div className={styles.infoFlexBox}>
                  <div className={styles.infoIcon}>
                    {info.icon}
                  </div>
                  <div className={styles.infoTextContent}>
                    <h4 className={styles.infoCardTitle}>{info.title}</h4>
                    {info.lines.map((line, i) => (
                      <div key={i} className={styles.infoCardLine}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <footer className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.copyrightText}>
            © {currentYear} Creamy Day Foods. All Rights Reserved.
          </div>
          <div className={styles.byText}>
            Made by <span className={styles.authorName}>Taran Vishnu</span> with 
            <span className={styles.floatingHeart}>
              <FaHeart />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactSection;
