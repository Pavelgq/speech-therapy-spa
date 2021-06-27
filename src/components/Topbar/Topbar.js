import React from "react";

import AuthUserPanel from "@components/UserPanels/AuthUserPanel";

import styles from "./Topbar.module.css";

const Topbar = ({name}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <AuthUserPanel />
    </div>
  );
};

export default Topbar;
