import { useState, useEffect } from 'react';
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
      <div className={`${styles.blob} ${styles.blobTopRight}`} />
      <div className={`${styles.blob} ${styles.blobBottomLeft}`} />
      <div className={`${styles.blob} ${styles.blobCenter}`} />

      <div className={styles.heroContent}>
        <div className={`${styles.heroLeft} ${visible ? styles.isVisible : ''}`}>
          <div className={styles.brandBadge}>
            <div className={styles.badgeDot} />
            <span className={styles.badgeTextBold}>Love In</span>
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
        </div>

        {/* Added dynamic heroRightMobileHidden class here */}
        <div className={`${styles.heroRight} ${styles.heroRightMobileHidden} ${visible ? styles.isVisible : ''}`}>
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
                  <div className={styles.captionTitle}>Classic Vanilla</div>
                  <div className={styles.captionSubtitle}>Most Loved Flavour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
