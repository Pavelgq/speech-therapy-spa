import React, {useState} from "react";
import {Link} from "react-router-dom";

import {FaBars} from "react-icons/fa";

import Sidebar from "@components/Sidebar/Sidebar";
import AuthUserPanel from "@components/UserPanels/AuthUserPanel";

import styles from "./Topbar.module.css";

const Topbar = ({name, menuItems, parrentName}) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className={styles.container}>
      <Link to="#" className={styles.menuBar} onClick={handleSidebar}>
        <FaBars />
      </Link>
      <h2 className={styles.title}>{name}</h2>
      <AuthUserPanel />
      <Sidebar
        items={menuItems}
        parrentName={parrentName}
        toggle={toggleSidebar}
        handleSidebar={handleSidebar}
      />
    </div>
  );
};

export default Topbar;
