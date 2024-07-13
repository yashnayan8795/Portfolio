import React from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

export const Certification = () => {
  return (
    <section className={styles.container} id="certification">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.certificationItems}>
          {certifications.map((certification, id) => (
            <li key={id} className={styles.certificationItem}>
              <img
                src={getImageUrl(certification.imageSrc)}
                alt={certification.title}
                className={styles.certificationImage}
              />
              <div className={styles.certificationItemText}>
                <h3>{certification.title}</h3>
                <p className={styles.issuer}>{certification.issuer}</p>
                <p className={styles.date}>{certification.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <img
          src={getImageUrl("certifications/certificationphoto.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};
