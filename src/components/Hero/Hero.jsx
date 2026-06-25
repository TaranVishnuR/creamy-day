import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Hero.module.css';
import softieImg from '../../assets/images/vanilla_softie.png';

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: 'Premium', label: 'Ingredients' },
    { value: 'Fresh', label: 'Daily Crafted' },
    { value: '100%', label: 'Customer Delight' },
  ];

  return ( 
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <motion.div
          className={`${styles.heroLeft} ${visible ? styles.isVisible : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className={styles.brandBadge}>
            <div className={styles.badgeDot} />
            <span className={styles.badgeTextBold}>LOVE IN</span>
            <span className={styles.badgeTextLight}>· Fall In Flavours</span>
          </div>

          <h1 className={styles.heroTitle}>
            Every Scoop <br />
            <span className={styles.heroTitleItalic}>Tells A Sweet</span> <br />
            Story
          </h1>

          <p className={styles.heroDescription}>
            Discover handcrafted ice creams, signature sundaes, and premium dessert
            experiences crafted to create unforgettable moments with every scoop.
          </p>

          <div className={styles.heroActions}>
            <button
              onClick={() => scrollTo('products')}
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Explore Menu
            </button>

            <button
              onClick={() => scrollTo('franchise')}
              className={`${styles.btn} ${styles.btnSolid}`}
            >
              Franchise Opportunities
            </button>
          </div>

          <div className={styles.statsContainer}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          
        </motion.div>

        <motion.div
          className={`${styles.heroRight} ${styles.heroRightMobileHidden} ${visible ? styles.isVisible : ''}`}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <div className={styles.imageCard}>
            <img
              src={softieImg}
              alt="Premium vanilla soft-serve ice cream"
              className={styles.heroImage}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.imageCaptionContainer}>
              <div className={styles.imageCaptionBox}>
                <div>
                  <div className={styles.captionTitle}>
                    Classic Vanilla
                  </div>

                  <div className={styles.captionSubtitle}>
                    Most Loved Flavour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
