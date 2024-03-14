import React, {memo, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/Logo.svg";
import {ReactComponent as Wallet} from "../../assets/images/wallet.svg";
import {ReactComponent as LogOut} from "../../assets/images/logout.svg";
import style from './Navbar.module.scss';
import {AppBar, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography} from "@mui/material";


export const NavbarComponent = memo(function NavbarComponent() {


    const time = 120

    useEffect(() => {

    }, [])

    useEffect(() => {
        let timer1 = setInterval(() => {
        }, time * 1000)
        return () => {
            clearTimeout(timer1);
        };
    }, [time]);

    return (
        <header>
            <div className={style.Container}>
                <div>
                    {/*<Logo/>*/}
                    {/*<p className={style.Title}>Vmodule</p>*/}
                </div>
                <nav>
                    <NavLink to={'users'}
                             className={({isActive}) => (isActive ? style.ActiveLink : style.InActiveLink)}>Пользователи</NavLink>
                    <NavLink to={'wallets'}
                             className={({isActive}) => (isActive ? style.ActiveLink : style.InActiveLink)}>Кошельки</NavLink>
                    <NavLink to={'conclusion'}
                             className={({isActive}) => (isActive ? style.ActiveLink : style.InActiveLink)}>Вывод</NavLink>
                </nav>

                <div className={style.BalanceBlock}>
                {/*<button>*/}
                {/*    <Wallet/>*/}
                {/*</button>*/}
                {/*<div className={style.BalanceBlock}>*/}
                {/*    <p className={style.Balance}>*/}
                {/*        ₽ {localStorage.getItem('balanceTerminals')}*/}
                {/*    </p>*/}
                {/*    <p>Доступный баланс</p>*/}
                {/*</div>*/}
                {/*<button onClick={() => {*/}

                {/*}}>*/}
                {/*    <LogOut/>*/}
                {/*</button>*/}
                </div>
            </div>
        </header>
    )
})
