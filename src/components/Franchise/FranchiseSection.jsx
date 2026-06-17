import styles from "./FranchiseSection.module.css";

import {
  FaRupeeSign,
  FaRulerCombined,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

export function FranchiseSection() {
  const stats = [
    {
      icon: <FaRupeeSign />,
      title: "Investment Required",
      value: "₹10–15L",
      sub: "All-inclusive setup cost",
      desc:
        "Covers fit-out, equipment, initial inventory, branding and working capital reserves.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Store Area Required",
      value: "200–400",
      sub: "sq. ft. recommended",
      desc:
        "Flexible store formats from kiosk to café, adaptable to malls and standalone outlets.",
    },
    {
      icon: <FaChartLine />,
      title: "Expected ROI",
      value: "18–24",
      sub: "months payback period",
      desc:
        "High demand and repeat customers ensure steady returns for franchise partners.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Support",
      value: "360°",
      sub: "end-to-end support",
      desc:
        "Training, operations manuals, marketing assistance and dedicated relationship managers.",
    },
  ];

  const steps = [
    {
      num: "01",
      label: "Application",
      desc: "Submit your franchise inquiry.",
    },
    {
      num: "02",
      label: "Evaluation",
      desc: "Our team reviews your profile and location.",
    },
    {
      num: "03",
      label: "Agreement",
      desc: "Sign the agreement and proceed.",
    },
    {
      num: "04",
      label: "Launch",
      desc: "Setup, train and open your Love In outlet.",
    },
  ];

  return (
    <section id="franchise" className={styles.sectionContainer}>
      <div className={`${styles.blob} ${styles.blobTopRight}`} />
      <div className={`${styles.blob} ${styles.blobBottomLeft}`} />

      <div className={styles.maxWrapper}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeText}>
              Franchise Opportunity
            </span>
          </div>

          <h2 className={styles.sectionTitle}>
            Grow With{" "}
            <span className={styles.italicTitle}>
              Love In
            </span>
          </h2>

          <p className={styles.headerDescription}>
            Join a fast-growing premium dessert brand and build
            a business you're proud of. Love In provides
            everything you need to succeed.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className={styles.statsCardGrid}>
          {stats.map((s, i) => (
            <div key={s.title} className={styles.statCardItem}>
              

              <div
                className={`${styles.statIcon} ${
                  i % 2 === 0
                    ? styles.iconCoral
                    : styles.iconGolden
                }`}
              >
                {s.icon}
              </div>

              <div className={styles.statCardTitle}>
                {s.title}
              </div>

              <div className={styles.statValue}>
                {s.value}
              </div>

              <div className={styles.statSub}>
                {s.sub}
              </div>

              <p className={styles.statDesc}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className={styles.processBoxWrapper}>
          <div className={styles.processBoxHeader}>
            <h3 className={styles.processTitle}>
              How To Get Started
            </h3>
          </div>

          <div className={styles.processStepsGrid}>
            <div className={styles.connectingLine} />

            {steps.map((step) => (
              <div
                key={step.num}
                className={styles.stepItem}
              >
                <div className={styles.stepBadgeNum}>
                  {step.num}
                </div>

              <div className={styles.stepContent}>

                <div className={styles.stepLabelText}>
                  {step.label}
                </div>

                <p className={styles.stepDescText}>
                  {step.desc}
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaActionBlock}>
          <button
            className={styles.franchiseBigBtn}
            onClick={() => {
              const contact =
                document.getElementById("contact");

              if (contact) {
                contact.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Become A Franchise Partner
          </button>
        </div>
      </div>
    </section>
  );
}

export default FranchiseSection;