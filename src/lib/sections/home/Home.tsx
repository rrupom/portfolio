import Profile from "@/lib/components/profile/Profile";
import Nav from "@/lib/components/nav/Nav";
import styles from "./Home.module.css";
import Socials from "@/lib/components/socials/Socials";
import ExperienceSummary from "@/lib/components/experience/summary/Summary";
import List from "@/lib/components/experience/list/List";
import Projects from "@/lib/components/projects/Projects";

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
