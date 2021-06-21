import React, {useState, useEffect} from "react";
import {useStore} from 'effector-react'

import useFetch from "@hooks/useFetch";

import {$currentUser, changeCurrentUserData} from '@model/currentUser'

import Sidebar from "@components/Sidebar/Sidebar";
import Topbar from "@components/Topbar/Topbar"

import global from '@styles/global.module.css'
import styles from "./styles.module.css";
const TeacherRoom = () => {
  const userData = useStore($currentUser)

  const url = "/user/custom"
  const [{isLoading, response, error}, doFetch] = useFetch(url);

  
  useEffect(() => {
    doFetch({
      method: "get",
    });
  }, [])

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
        <section className={styles.mainPanel}>Здесь будет информация</section>
      </div>
      
    </main>
  );
};

export default TeacherRoom;
