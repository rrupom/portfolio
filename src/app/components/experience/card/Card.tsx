import Icon from "@/lib/svg/icon";
import styles from "./Card.module.css";
import { WorkExperience } from "@/types/experience.types";

const Card = ({ experience }: { experience: WorkExperience }) => {
  const { time, title, company, works, technologies } = experience;
  return (
    <div className={styles["container"]}>
      <div className={styles["timeline"]}>{time}</div>
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <div className={styles["role-title"]}>
            <h2>{title}</h2>
            <h3>{company}</h3>
          </div>
        </div>
        <div className={styles["role-description"]}>
          <ul>
            {works?.map((work) => (
              <li key={work.id}>{work.title}</li>
            ))}
          </ul>
        </div>
        <div className={styles["technologies"]}>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
