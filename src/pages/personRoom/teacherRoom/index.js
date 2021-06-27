import React, {useState, useEffect} from "react";

import {Route} from "react-router-dom";


import Topbar from "@components/Topbar/Topbar";

import StudentsList from "@pages/studentsList/index";
import TasksList from "@pages/tasksList/index";
import LessonList from "@pages/lessonList/index";
import SoundList from "@pages/soundList/index";

import global from "@styles/global.module.css";
import styles from "./styles.module.css";

const TeacherRoom = (props) => {
  const [sectionElements] = useState({
    students: "Ученики",
    sounds: "Коллекция",
    tasks: "Задания",
    lessons: "Уроки",
  });
  return (
    <main className={global.mainWrapper}>
      <Topbar name="Кабинет преподавателя" menuItems={sectionElements} parrentName="teacher"/>
      <div className={styles.container}>
        <section className={styles.mainPanel}>
          <Route path="/teacher/students" component={StudentsList} />
          <Route path="/teacher/sounds" component={SoundList} />
          <Route path="/teacher/tasks" component={TasksList} />
          <Route path="/teacher/lessons" component={LessonList} />
        </section>
      </div>
    </main>
  );
};

export default TeacherRoom;
