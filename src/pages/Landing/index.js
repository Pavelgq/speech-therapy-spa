import React from "react";
import {Link} from "react-router-dom";

// import VisitCalendar from '@components/VisitCalendar/VisitCalendar'

import styles from "./styles.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      Landing Page
      <div className="container">
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Landing;
