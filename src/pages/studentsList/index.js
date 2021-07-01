import React from "react";

import {useStore} from "effector-react";

import {$allUser, $allUserError, fetchAllUserFx} from "./model/usersModel";
import {useEffect} from "react";

import StudentCard from "./components/StudentCard";

import styles from "./styles.module.css";

const StudentsList = () => {
  const isLoading = useStore(fetchAllUserFx.pending);
  const error = useStore($allUserError);
  const userData = useStore($allUser);

  useEffect(() => {
    fetchAllUserFx();
  }, []);
  const usersId = userData ? Object.keys(userData) : null;
  const items = usersId
    ? usersId.map((el, index) => {
        return <StudentCard key={index} info={userData[el]} />;
      })
    : null;

  return (
    <div className={styles.container}>
      Список учеников
      <ul className={styles.list}>{items}</ul>
    </div>
  );
};

export default StudentsList;
