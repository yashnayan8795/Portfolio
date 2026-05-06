import { motion } from "framer-motion";
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
            <motion.li 
              key={id} 
              className={styles.certificationItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.1 }}
            >
              <img
                src={getImageUrl(certification.imageSrc)}
                alt={`${certification.issuer} logo`}
                className={styles.certificationImage}
              />
              <div className={styles.certificationItemText}>
                <h3>{certification.title}</h3>
                <p className={styles.issuer}>{certification.issuer}</p>
                <p className={styles.date}>{certification.date}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        <motion.img
          src={getImageUrl("certifications/certificationphoto.png")}
          alt="Illustration of certificates"
          className={styles.aboutImage}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};
