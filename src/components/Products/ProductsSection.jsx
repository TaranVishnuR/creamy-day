import { useState } from "react";
import styles from "./ProductsSection.module.css";

import classicVanillaSoftieImg from "../../assets/images/classic_vanilla_softie.png";
import strawberrySoftieImg from "../../assets/images/strawberry.png"; 
import chocolateSundaeImg from "../../assets/images/chocolate_sundae.png";
import oreoShakeImg from "../../assets/images/oreo_shake.png";

const products = [
  {
    id: 1,
    name: "Classic Vanilla Softie",
    category: "Softy",
    tag: "Best Seller",
    tagColor: "var(--coral, #FF6F61)",
    availability: "Available Daily",
    desc: "Our signature creamy vanilla softy made with premium dairy ingredients. Smooth, refreshing and loved by customers of all ages.",
    price: "₹30",
    rating: 4.9,
    img: classicVanillaSoftieImg,
    gradient: "linear-gradient(135deg, #F8E6D0 0%, #FFD9A8 100%)",
  },
  {
    id: 2,
    name: "Strawberry Softie",
    category: "Softy",
    tag: "Most Loved",
    tagColor: "var(--coral, #FF6F61)",
    availability: "Available Daily",
    desc: "Delicious strawberry-flavoured softy with a rich creamy texture and refreshing fruity taste that keeps customers coming back.",
    price: "₹40",
    rating: 4.8,
    img: strawberrySoftieImg,
    gradient: "linear-gradient(135deg, #FF6F61 0%, #FFB5AF 100%)",
  },
  {
    id: 3,
    name: "Chocolate Sundae",
    category: "Sundae",
    tag: "Premium",
    tagColor: "var(--chocolate, #2D1F1F)",
    availability: "Available Daily",
    desc: "Rich chocolate sundae topped with chocolate sauce and creamy softy. A perfect dessert choice for chocolate lovers.",
    price: "₹50",
    rating: 4.9,
    img: chocolateSundaeImg,
    gradient: "linear-gradient(135deg, #2D1F1F 0%, #5A4038 100%)",
  },
  {
    id: 4,
    name: "Oreo Shake",
    category: "Milkshake",
    tag: "Special",
    tagColor: "#6B4EFF",
    availability: "Available Daily",
    desc: "Creamy Oreo milkshake blended with crunchy Oreo cookies for the perfect balance of texture and flavour.",
    price: "₹50",
    rating: 4.8,
    img: oreoShakeImg,
    gradient: "linear-gradient(135deg, #3D2B1F 0%, #7B5C40 100%)",
  },
];

export function ProductsSection() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section id="products" className={styles.sectionContainer}>
      <div className={styles.backgroundBlob}></div>

      <div className={styles.maxWrapper}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeText}>Signature Products</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Fall In Love With <br />
              <span className={styles.italicTitle}>Every Flavour</span>
            </h2>
          </div>
          <p className={styles.headerDescription}>
            Each recipe is developed by our in-house dessert chefs using premium
            ingredients and crafted to create unforgettable moments.
          </p>
        </div>

        <div className={styles.tabOuterWrapper}>
          <div className={styles.tabSelectorRow}>
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`${styles.tabButton} ${active === i ? styles.tabActive : ""}`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className={styles.scrollHintMobile}>
            <span className={styles.scrollLine}></span>
            <span className={styles.scrollText}>Swipe to explore full menu</span>
            <span className={styles.scrollLine}></span>
          </div>
        </div>

        <div key={product.id} className={styles.featureCardGrid}>
          <div className={styles.imageCardPanel} style={{ background: product.gradient }}>
            <img src={product.img} alt={product.name} className={styles.productGraphic} />
            <div className={styles.darkGradientOverlay}></div>
            <div className={styles.bottomImageCaption}>
              <div className={styles.captionTitleText}>{product.name}</div>
            </div>
          </div>

          <div className={styles.detailsContentPanel}>
            <div className={styles.detailsHeaderMeta}>
              <span
                className={styles.productTag}
                style={{
                  color: product.tagColor,
                  borderColor: `${product.tagColor}33`,
                }}
              >
                {product.tag}
              </span>
              <span className={styles.brandContextText}>· Love In</span>
            </div>

            <h3 className={styles.productNameTitle}>{product.name}</h3>
            <p className={styles.productDescriptionText}>{product.desc}</p>

            <div className={styles.ratingRowMeta}>
              <span className={styles.starIconChar}>★</span>
              <span className={styles.ratingValueText}>{product.rating}</span>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{product.category}</span>
              <span className={styles.availableBadge}>● {product.availability}</span>
            </div>

            <div className={styles.pricingActionFooter}>
              <div>
                <div className={styles.priceLabelMeta}>Price From</div>
                <div className={styles.priceNumericalValue}>{product.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
