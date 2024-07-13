import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash</h1>
        <p className={styles.description}>
        I'm an aspiring Full-Stack developer who has a passion for designing 
        user-friendly and eye-catching web and mobile experiences.
        capable of creating dynamic, responsive websites and mobile 
        applications using new technologies like ReactJS, VueJs, 
        React Native and NextJS.
        </p>
        <a href="mailto:yash.nayan.04@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/dp.jpg")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
