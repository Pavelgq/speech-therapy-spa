import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({items, parrentName, toggle, handleSidebar}) => {

  const routeName = parrentName ? `/${parrentName}` : "";
  const elements = Object.keys(items).map((el, index) => {
    return (
      <li key={index} className={styles.item}>
        <Link to={`${routeName}/${el}`} className={styles.link}>
          {items[el]}
        </Link>
      </li>
    );
  });

  return (
    <nav className={toggle ? `${styles.sidebar} ${styles.showSidebar}` : styles.sidebar} onClick={handleSidebar}>
      <a className={styles.closeBtn} onClick={handleSidebar}>&times;</a>
      <ul className={styles.list}>
        {elements}
        </ul>
    </nav>
  );
};

export default Sidebar;
