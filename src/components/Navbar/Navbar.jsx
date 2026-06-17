import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About Us", "Products", "Franchise", "Contact Us"];

  const sectionMap = {
    Home: "hero",
    "About Us": "about",
    Products: "products",
    Franchise: "franchise",
    "Contact Us": "contact",
  };

  useEffect(() => {
  const handleSectionScroll = () => {
    for (const [name, id] of Object.entries(sectionMap)) {
      const section = document.getElementById(id);

      if (section) {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(name);
        }
      }
    }
  };

  window.addEventListener(
    "scroll",
    handleSectionScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleSectionScroll
    );
}, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navContainer} ${scrolled ? styles.isScrolled : ""}`}>
      <div className={styles.navMaxWrapper}>
        <div className={styles.navFlexRow}>
          
          <div className={styles.logoContainer} onClick={() => scrollTo("hero")}>
            <span className={styles.logoTitle}>CREAMY DAY</span>
            <span className={styles.logoSub}>Melt The Moment</span>
          </div>

          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionMap[link])}
                className={`${styles.linkItem} ${
  activeSection === link
    ? styles.activeLink
    : ""
}`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className={styles.desktopActions}>
            <button
              onClick={() => scrollTo("products")}
              className={`${styles.btn} ${styles.btnMenu}`}
            >
              View Menu
            </button>
            <button
              onClick={() => scrollTo("franchise")}
              className={`${styles.btn} ${styles.btnFranchise}`}
            >
              Franchise Inquiry
            </button>
          </div>

          <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.mobileToggleButton}
              aria-label="Toggle navigation menu"
          >
            <div className={`${styles.burgerLine} ${menuOpen ? styles.lineTopOpen : ""}`} />
            <div className={`${styles.burgerLine} ${menuOpen ? styles.lineMidOpen : ""}`} />
            <div className={`${styles.burgerLine} ${menuOpen ? styles.lineBotOpen : ""}`} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileDropdown} ${menuOpen ? styles.dropdownOpen : ""}`}>
        <div className={styles.mobileLinksWrapper}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionMap[link])}
              className={`${styles.mobileLinkItem} ${
  activeSection === link
    ? styles.mobileActive
    : ""
}`}
            >
              {link}
            </button>
          ))}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
