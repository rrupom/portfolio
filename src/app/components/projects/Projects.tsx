import projects from "./items";
import Card from "./card/Card";
import styles from "./Project.module.css";

const Projects = () => {
  return (
    <div className={styles["container"]} id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
