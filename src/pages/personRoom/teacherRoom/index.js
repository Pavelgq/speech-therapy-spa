import React, {useState, useEffect} from "react";

import {
  BrowserRouter as 
  Router,
  Route,
  Switch
} from "react-router-dom";



import {useStore} from "effector-react";
import useFetch from "@hooks/useFetch";

import {$currentUser, changeCurrentUserData, fetchCurrentUser} from "@model/currentUser";

import Sidebar from "@components/Sidebar/Sidebar";
import Topbar from "@components/Topbar/Topbar";

import StudentsList from "@pages/studentsList/index";

import global from "@styles/global.module.css";
import styles from "./styles.module.css";
const TeacherRoom = (props) => {
  console.log(props)
  const userData = useStore($currentUser);

  const url = "/user/custom";
  const [{isLoading, response, error}, doFetch] = useFetch(url);

  useEffect(() => {
    doFetch({
      method: "get",
    });
  }, []);

  const [sectionElements] = useState({
    students: "Ученики",
    sounds: "Коллекция звуков",
    tasks: "Задания",
    lessons: "Уроки",
  });
  return (
    <main className={global.wrapper}>
      <Topbar name="Кабинет преподователя" user={userData} />
      <h2>Кабинет преподователя</h2>
      <div className={global.container}>
        <Sidebar items={sectionElements} />
        <section className={styles.mainPanel}>
          <Router>
          <Switch>
            <Route path="/teacher/students" component={StudentsList} />
              <Route path="/teacher/sounds" component={StudentsList} />
              <Route path="/teacher/tasks" component={StudentsList} />
              <Route path="/teacher/lessons" component={StudentsList} />
          </Switch>
         </Router>
             
        </section>
      </div>
    </main>
  );
};

export default TeacherRoom;
