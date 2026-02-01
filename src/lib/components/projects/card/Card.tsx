"use client";

import { Project } from "@/types/project.types";
import styles from "./Card.module.css";
import Icon from "@/lib/svg/icon";

const Card = ({ project }: { project: Project }) => {
  const handleClickLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles["container"]}>
      <h2>{project.name}</h2>
      <p className={styles["description"]}>{project.description}</p>
      <div className={styles["technologies"]}>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={styles["links"]}>
        {project.liveLink && (
          <a onClick={() => handleClickLink(project.liveLink!)}>
            <Icon name="EXTERNAL" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
