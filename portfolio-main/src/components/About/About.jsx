import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/Designer-removebg-preview.png")}
          alt="Illustration of a developer working"
          className={styles.aboutImage}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />
        <motion.ul 
          className={styles.aboutItems}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" aria-hidden="true" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Engineer</h3>
              <p>
                Expertise in crafting interactive, responsive, and dynamic user interfaces using React and modern JavaScript frameworks.
              </p>
            </div>
          </motion.li>
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/uiIcon.png")} alt="" aria-hidden="true" />
            <div className={styles.aboutItemText}>
              <h3>Backend Engineer</h3>
              <p>
                Proficient in developing robust, scalable server-side applications and RESTful APIs with Node.js and Express.
              </p>
            </div>
          </motion.li>
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" aria-hidden="true" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                Experienced in scripting, automation, and developing backend services with Python, including data analysis and machine learning.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};