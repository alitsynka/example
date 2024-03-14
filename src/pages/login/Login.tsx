import style from './Login.module.scss';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import React, {useEffect} from "react";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {AppRootStateType} from "../../state/store";
import {RequestStatusType} from "../../state/appReducer";
import {loginTC} from "../../state/authReducer";

const FORM_VALIDATION = Yup.object().shape({
    login: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required').min(4),
})

export const LoginPage = () => {
    const dispatch = useDispatch();
    const isLoggedIn = true
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);

    let navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            return navigate("/users");
        }
    }, [isLoggedIn]);


    return (

        <div className={style.Wrapper}>

            <Formik initialValues={{
                login: '',
                password: '',
            }}
                    validationSchema={FORM_VALIDATION}
                    enableReinitialize={true}
                    onSubmit={(values, action) => {
                        // alert(JSON.stringify(values, null, 2));
                        dispatch(loginTC(values))
                    }}>
                {({
                      errors,
                      getFieldProps,
                      touched,
                      dirty,
                      isValid,
                      handleSubmit,
                  }) => {

                    const passError = (errors.password && touched.password);
                    const loginError = (errors.login && touched.login);

                    return <Form onSubmit={handleSubmit} className={style.Form}>
                        <h1>Вход</h1>
                        {
                            status === 'failLogin'
                                ? <p className={style.ErrorDesc}>Вы ввели неверный логин или пароль</p>
                                : <p>
                                    Введите данные, полученные у администратора
                                </p>
                        }

                        <div className={style.FieldWr}>
                            <label htmlFor={'login'}>Login</label>
                            <TextField
                                {...getFieldProps('login')}
                                type="text"
                                autoFocus
                                className={`${style.Input} ${(loginError || status === 'failLogin') && style.InputError}`}
                                placeholder={''}
                            />
                            {loginError ?
                                <div className={style.Error}>{errors.login}</div> : null}
                        </div>
                        <div className={style.FieldWr}>
                            <label htmlFor={'password'}>Password</label>
                            <TextField
                                {...getFieldProps('password')}
                                type="password"
                                className={`${style.Input} ${(passError || status === 'failLogin') && style.InputError}`}
                                placeholder={''}
                            />
                            {passError ?
                                <div className={style.Error}>{errors.password}</div> : null}
                        </div>


                        <button
                            className={`${style.BtnSubmit} ${(!isValid || !dirty) && style.BtnSubmitDisabled}`}
                            disabled={!isValid || !dirty}
                            type={'submit'}
                        >
                            Войти
                        </button>
                    </Form>
                }}
            </Formik>
        </div>
    )
}