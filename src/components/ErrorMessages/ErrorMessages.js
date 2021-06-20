import React from "react";

import styles from "./ErrorMessages.module.css";

const ErrorMessages = ({formErrors = {}, backError = ""}) => {
  return (
    <ul>
      {backError && <li className={styles.error}>{backError}</li>}
      {formErrors.email && formErrors.email.type === "required" && (
        <li className={styles.error}>Введите email</li>
      )}
      {formErrors.email &&
        (formErrors.email.type === "pattern" ||
          formErrors.email.type === "minLength") && (
          <li className={styles.error}>Вы ввели что-то не похожее на email</li>
        )}
      {formErrors.password && <li className={styles.error}>Введите пароль </li>}
    </ul>
  );
};

export default ErrorMessages;
