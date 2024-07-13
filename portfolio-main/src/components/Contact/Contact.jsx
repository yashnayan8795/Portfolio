import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3>Feel free to reach out!</h3>
        <p>Designed by Yash Nayan</p>
        <h4>Copyright © 2024</h4>
        <h4>Download my <a href="https://drive.google.com/file/d/1togQ__-Rd8rRKc2gsf2VceAbmZG3S4FJ/view?usp=sharing">Resume</a> </h4>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:yash.nayan.04@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/yash-nayan-631318250/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/yashnayan8795">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
