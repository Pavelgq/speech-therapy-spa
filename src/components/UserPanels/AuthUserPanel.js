import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import {useStore} from "effector-react";

import {$currentUser, $currentUserError, fetchCurrentUserFx} from "@model/currentUser";

import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

import Loading from "@components/Loading/Loading";
import FetchError from "@components/FetchError/FetchError";

import styles from "./AuthUserPanel.module.css";

const AuthUserPanel = () => {
  const isLoading = useStore(fetchCurrentUserFx.pending);
  const error = useStore($currentUserError);
  const userData = useStore($currentUser);

  const status = userData && (userData.role === "admin" ? "Учитель" : "Ученик");

  useEffect(() => {
    fetchCurrentUserFx();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />} {error && <FetchError />}
      {userData && (
        <>
          <Link to="#" className={styles.link}>
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </Link>

          <div className={styles.imageWrapper}>
            <img
              src="https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png"
              className={styles.userAvatar}
              alt="Аватар пользователя"
            />
          </div>

          <div className={styles.userInfo}>
            <h3 className={styles.userName}>
              {userData.firstName} {userData.lastName}
            </h3>
            <span className={styles.userStatus}>{status}</span>
            <div className={styles.wrapper}>
              <Link to="#" className={styles.link}>
                Профиль
              </Link>
              <Link to="#" className={styles.link}>
                Выход
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthUserPanel;
