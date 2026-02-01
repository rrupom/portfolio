"use client";

import socialItems from "./items";
import Icon from "@/lib/svg/icon";
import styles from "./Socials.module.css";

const Socials = () => {
  const onClickIcon = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div className={styles["social-container"]}>
      <ul>
        {socialItems.map((item, index) => (
          <li key={index} onClick={() => onClickIcon(item.href)}>
            {<Icon name={item.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
