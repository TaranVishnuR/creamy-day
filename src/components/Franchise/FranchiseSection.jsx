import styles from "./FranchiseSection.module.css";
import {
  FaRupeeSign,
  FaRulerCombined,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function FranchiseSection() {
  const stats = [
    {
      icon: <FaRupeeSign />,
      title: "Investment Required",
      value: "₹5–10L",
      sub: "All-inclusive setup cost",
      desc: "Covers fit-out, equipment, initial inventory, branding and working capital reserves.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Store Area Required",
      value: "150–250",
      sub: "sq. ft. recommended",
      desc: "Flexible store formats from kiosk to café, adaptable to malls and standalone outlets.",
    },
    {
      icon: <FaChartLine />,
      title: "Expected ROI",
      value: "12–28",
      sub: "months payback period",
      desc: "High demand and repeat customers ensure steady returns for franchise partners.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Support",
      value: "360°",
      sub: "end-to-end support",
      desc: "Training, operations manuals, marketing assistance and dedicated relationship managers.",
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
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionBadge}>
            <span className={styles.badgeText}>
              Franchise Opportunity
            </span>
          </div>

          <h2 className={styles.sectionTitle}>
            Grow With <span className={styles.italicTitle}>Love In</span>
          </h2>

          <p className={styles.headerDescription}>
            Join a fast-growing premium dessert brand and build
            a business you're proud of. Love In provides
            everything you need to succeed.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <div className={styles.statsCardGrid}>
          {stats.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.statCardItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div
                className={`${styles.statIcon} ${
                  i % 2 === 0 ? styles.iconCoral : styles.iconGolden
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
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          className={styles.processBoxWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.processBoxHeader}>
            <h3 className={styles.processTitle}>
              How To Get Started
            </h3>
          </div>

          <div className={styles.processStepsGrid}>
            <div className={styles.connectingLine} />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.stepItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.ctaActionBlock}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            className={styles.franchiseBigBtn}
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) {
                contact.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Become A Franchise Partner
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default FranchiseSection;
