import React, { Fragment, useContext } from 'react'
import {GlobalData} from './FormContext'
import style from './register.module.css'

const RegisterForm = () => {
    let {
        registerUser:{username, email, password},
        handleRegister,
        registerSubmit
    } = useContext(GlobalData);

  return (
    <Fragment>
        <form id={style.formContainer} onSubmit={registerSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="username">username</label>
                <input
                type='text'
                placeholder='username'
                name='username'
                 value={username}
                 onChange={handleRegister}
                />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">email</label>
                <input
                type='text'
                placeholder='email'
                name='email'
                value={email}
                onChange={handleRegister}
                />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="password">password</label>
                <input
                type='text'
                placeholder='password'
                name='password'
                value={password}
                onChange={handleRegister}
                />
            </div>
            <div className={style.btncontainer}>
                <input type='submit' value={"register"}/>
            </div>
        </form>
    </Fragment>
  )
}

export default RegisterForm