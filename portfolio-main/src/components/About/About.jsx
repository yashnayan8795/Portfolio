import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Designer-removebg-preview.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Engineer</h3>
              <p>
                Expertise in crafting interactive, responsive, and dynamic user interfaces using React and modern JavaScript frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Engineer</h3>
              <p>
                Proficient in developing robust, scalable server-side applications and RESTful APIs with Node.js and Express.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Python icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                Experienced in scripting, automation, and developing backend services with Python, including data analysis and machine learning.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};