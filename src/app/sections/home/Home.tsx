import Profile from "@/app/components/profile/Profile";
import Nav from "@/app/components/nav/Nav";
import styles from "./Home.module.css";
import Socials from "@/app/components/socials/Socials";
import ExperienceSummary from "@/app/components/experience/summary/Summary";
import List from "@/app/components/experience/list/List";
import Projects from "@/app/components/projects/Projects";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["left-section"]}>
        <Profile />
        <Nav />
        <Socials />
      </div>
      <div className={styles["right-section"]}>
        <ExperienceSummary />
        <List />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
