import React from 'react'
import style from './DefaultLayout.module.scss';
import {NavbarComponent as Navbar} from "../compoents/navBar/Navbar"
import MainContent from "../compoents/mainContent/MainContent";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {RequestStatusType} from "../state/appReducer";

const DefaultLayout = () => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <div className={style.Wrapper}>

            <Navbar/>
            {
                status === 'loading' && <LinearProgress className={style.Linear}/>
            }
            <div className={style.Container}>
                <MainContent/>
            </div>
        </div>
    )
}

export default DefaultLayout