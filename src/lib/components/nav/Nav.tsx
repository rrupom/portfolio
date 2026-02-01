"use client";

import navItems from "./items";
import styles from "./Nav.module.css";
import { useState } from "react";
const Nav = () => {
  const [active, setActive] = useState("#about");

  const handleNavClick = (href: string) => {
    setActive(href);
  };

  return (
    <div className={styles["nav-container"]}>
      <ul>
        {navItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            onClick={() => handleNavClick(item.href)}
          >
            <li className={active === item.href ? styles.active : ""}>
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
