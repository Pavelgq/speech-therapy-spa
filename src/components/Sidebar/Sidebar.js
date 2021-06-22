import React from "react";
import {Link, useLocation} from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({items}) => {
  const location = useLocation();
  console.log(location);
  console.log(items);
  const elements = Object.keys(items).map((el, index) => {
    return (
      <li key={index} className={styles.item}>
        <Link to={`/${el}`} className={styles.link}>
          {items[el]}
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>{elements}</ul>
    </nav>
  );
};

export default Sidebar;
