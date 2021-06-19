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
                    <div className={styles.wrapper}>
                        <input 
                            type="text" 
                            className={styles.field} 
                            placeholder="E-mail"
                            defaultValue="" 
                            {...register("login", { required: true, maxLength: 20 })}
                        />
                        {errors.login && <span className={styles.error}>Введите логин </span>}
                    </div>
                    <div className={styles.wrapper}>
                        <input 
                            type="password" 
                            className={styles.field} 
                            placeholder="Пароль"
                            defaultValue="" 
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className={styles.error}>Введите пароль </span>}
                    </div>
                    <input type="submit" className={styles.button} />
                </fieldset>
                
            </form>
    )
}

export default Authentication