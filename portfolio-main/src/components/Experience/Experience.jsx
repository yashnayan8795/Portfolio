import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import tools from "../../data/tools.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My Skills & Experience</h2>
      
      <div className={styles.skillsSection}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <motion.div 
              key={id} 
              className={styles.skill}
              whileHover={{ scale: 1.1 }}
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.experiencesSection}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <motion.li 
              key={id} 
              className={styles.historyItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.1 }}
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className={styles.toolsSection}>
        <h3 className={styles.sectionTitle}>Tools I Use</h3>
        <div className={styles.tools}>
          {tools.map((tool, id) => (
            <motion.div 
              key={id} 
              className={styles.tool}
              whileHover={{ scale: 1.1 }}
            >
              <div className={styles.toolImageContainer}>
                <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
              </div>
              <p>{tool.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
