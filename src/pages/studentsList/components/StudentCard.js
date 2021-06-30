import React from "react";

import styles from './StudentCard.module.css'

const StudentCard = ({info}) => {
  return (
    <li className={styles.card}>
        <div className={styles.container}>
            <h4 className={styles.name}>
                {info.firstName}
                {info.lastName}
            </h4>
            <p className={styles.info}>
                <span className={styles.textRow}>Класс: {info.class}</span>
                <span className={styles.textRow}>Опыт: {info.exp}</span>
                <span className={styles.textRow}>Уроки: {info.lessons}</span>
            </p>
            <button className={styles.button}>Профиль</button>
        </div>
      
    </li>
  );
};

export default StudentCard;


/**
 *  "role": "user",
        "days": [
            "2020-10-13T14:52:18.989Z",
            "2020-10-17T18:50:02.409Z",
            "2020-10-19T11:03:12.534Z",
            "2020-10-20T16:36:08.189Z",
            "2020-10-22T18:50:02.910Z",
            "2020-11-13T14:19:04.205Z"
        ],
        "lessons": 6,
        "level": 0,
        "money": 3333,
        "exp": 444,
        "kMoney": 1,
        "kExp": 1.9,
        "_id": "5f8f26df31c0853b44c12939",
        "firstName": "Иван",
        "lastName": "Иванов",
        "sex": "м",
        "class": "11А",
        "login": "ivan123",
        "email": "ivan123@yandex.ru",
 */