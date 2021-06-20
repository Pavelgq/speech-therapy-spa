import React, {useState, useEffect} from "react";

import {Link, Redirect} from "react-router-dom";

import {useForm} from "react-hook-form";
import useFetch from "@hooks/useFetch";
import useLocalStorage from "@hooks/useLocalStorage";

import ErrorMessages from "@components/ErrorMessages/ErrorMessages";

import styles from "./styles.module.css";

const Authentication = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const [isSuccesSubmit, setIsSuccesSubmit] = useState(false);

  const [token, setToken] = useLocalStorage("token");

  const url = "/user/login";
  const [{isLoading, response, error}, doFetch] = useFetch(url);

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.token);
    setIsSuccesSubmit(true);
  }, [response]);

  const onSubmit = (values) => {
    doFetch({
      method: "post",
      data: {...values},
    });
  };

  if (isSuccesSubmit) {
    if (response.role === "admin") {
      return <Redirect to="/teacher" />;
    } else {
      return <Redirect to="/student" />;
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.container}>
        <legend className={styles.title}>Кто здесь? Входите!</legend>
        <div className={styles.wrapper}>
          <ErrorMessages formErrors={errors} backError={error} />
          <input
            type="text"
            className={styles.field}
            placeholder="E-mail"
            defaultValue=""
            {...register("email", {
              required: true,
              minLength: 3,
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            })}
          />
        </div>
        <div className={styles.wrapper}>
          <input
            type="password"
            className={styles.field}
            placeholder="Пароль"
            defaultValue=""
            {...register("password", {required: true})}
          />
        </div>
        <input type="submit" className={styles.button} />
      </fieldset>
    </form>
  );
};

export default Authentication;
