import styles from "./Summary.module.css";

const ExperienceSummary = () => {
  return (
    <div className={styles["container"]} id="about">
      <p>
        I’m a software engineer with experience building scalable web
        applications, with a strong focus on backend systems and clean,
        maintainable frontend implementations. I enjoy working across the stack,
        especially where system design, performance, and user-facing features
        intersect.
      </p>
      <p>
        Currently, I work as an <span>Associate Software Engineer</span> at
        <span>
          <a href={"https://shellbeehaken.com/"}> ShellBeeHaken Ltd</a>
        </span>
        , where I contribute to building and maintaining production systems used
        by real users. My work includes designing <span>RESTful APIs</span> with
        <span> Node.js</span>, implementing scheduled and{" "}
        <span>asynchronous workflows using AWS Lambda</span>, and integrating
        <span> secure payment systems with Stripe</span>. I’ve also worked on
        real-time features using <span>Redis and Socket.IO</span>, and have been
        involved in performance optimization through caching and efficient API
        design.
      </p>
      <p>
        On the frontend, I work with <span>React</span> and <span>Next.js</span>{" "}
        to translate design prototypes into pixel-accurate, responsive
        interfaces. I focus on writing modular, reusable components and
        collaborating closely with backend logic to ensure smooth data flow and
        reliable user experiences.
      </p>
      <p>
        Previously, I started my professional journey as a{" "}
        <span>Trainee Software Engineer</span>, where I gained hands-on
        experience with modern web technologies, agile development practices,
        and collaborative code reviews.
      </p>
      <p>
        Outside of work, I enjoy learning new technologies, refining my
        engineering fundamentals, and building side projects that help me grow
        as an Engineer.
      </p>
    </div>
  );
};

export default ExperienceSummary;
