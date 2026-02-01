import Card from "@/app/components/experience/card/Card";
import experiences from "./items";
import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles["container"]} id="experience">
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <Card key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default List;
