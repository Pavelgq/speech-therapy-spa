import React from 'react'

import { useForm } from 'react-hook-form'


const Authentication = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data);
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>Authentication Page</fieldset>
                <input defaultValue="test" {...register("login", { required: true, maxLength: 20 })}/>

                 <input type="submit" />
            </form>
    )
}

export default Authentication