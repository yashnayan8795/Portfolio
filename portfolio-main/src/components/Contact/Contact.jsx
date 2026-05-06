import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import config from "../../data/config.json";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3>Feel free to reach out!</h3>
        <p>Designed by {config.name}</p>
        <h4>Copyright © {new Date().getFullYear()}</h4>
        <h4>
          Download my{" "}
          <a
            href={config.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </h4>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href={`mailto:${config.email}`}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href={config.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href={config.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
