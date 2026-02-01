import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles["profile"]}>
      <div className={styles["header"]}>
        <h1>Rakib Talukder Rupom</h1>
        <h3>Full-stack Software Engineer</h3>
      </div>
      <p>
        Focused on building scalable web applications, designing maintainable
        architectures, and solving complex engineering problems.
      </p>
    </div>
  );
};

export default Profile;
