import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";

import { HiOutlineChevronLeft } from "react-icons/hi";


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
    <nav
      className={toggle ? `${styles.sidebar} ${styles.showSidebar}` : styles.sidebar} 
    >
      <a className={styles.closeBtn} onClick={handleSidebar}>
        <HiOutlineChevronLeft/>
      </a>
      <ul className={styles.list} onClick={handleSidebar}>{elements}</ul>
    </nav>
  );
};

export default Sidebar;
