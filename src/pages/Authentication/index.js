import React from 'react'

import { useForm } from 'react-hook-form'

import styles from './styles.module.css'

const Authentication = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = data => console.log(data);
    return (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                <fieldset className={styles.container}>
                    <legend className={styles.title}>Кто здесь? Входите!</legend>
                    <input 
                    type="text" 
                    className={styles.field} 
                    placeholder="E-mail"
                    defaultValue="" 
                    {...register("login", { required: true, maxLength: 20 })}
                />
                {errors.login && <span className={styles.error}>Ошибки </span>}
                <input 
                    type="password" 
                    className={styles.field} 
                    placeholder="Пароль"
                    defaultValue="" 
                    {...register("password", { required: true })}
                />
                {errors.login && <span className={styles.error}>Ошибки </span>}
                 <input type="submit" className={styles.button} />
                </fieldset>
                
            </form>
    )
}

export default Authentication