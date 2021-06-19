import React, { useState, useEffect } from "react";

import {useForm} from "react-hook-form";
import useFetch from '@hooks/useFetch'

import styles from "./styles.module.css";

const Authentication = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const [data, setData] = useState({});

  const url = '/user/custom';
  const [{isLoading, response, error}, doFetch] = useFetch(url)

  console.log(data)
  useEffect(() => {
    doFetch({
      method: 'get',
      data: {data},
      headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

      }
    })
  }, [data])

  const onSubmit = (values) => {
    console.log(values)
    setData(values)
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.container}>
        <legend className={styles.title}>Кто здесь? Входите!</legend>
        <div className={styles.wrapper}>
          <input
            type="text"
            className={styles.field}
            placeholder="E-mail"
            defaultValue=""
            {...register("email", {required: true, maxLength: 20})}
          />
          {errors.email && <span className={styles.error}>Введите логин </span>}
        </div>
        <div className={styles.wrapper}>
          <input
            type="password"
            className={styles.field}
            placeholder="Пароль"
            defaultValue=""
            {...register("password", {required: true})}
          />
          {errors.password && <span className={styles.error}>Введите пароль </span>}
        </div>
        <input type="submit" className={styles.button} />
      </fieldset>
    </form>
  );
};

export default Authentication;
