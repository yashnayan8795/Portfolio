
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import config from "../../data/config.json";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.title}>{"Hi, I'm "}{config.name.split(" ")[0]}</h1>
        <p className={styles.description}>
          {config.description}
        </p>
        <a href={`mailto:${config.email}`} className={styles.contactBtn}>
          Contact Me
        </a>
      </motion.div>
      <motion.img
        src={getImageUrl("hero/dp.jpg")}
        alt={`Profile picture of ${config.name}`}
        className={styles.heroImg}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
