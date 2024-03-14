import style from "./PerPage.module.scss";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useEffect, useState} from "react";

type PerPageComponetType = {
    perPage: number
    setPerPage: (tr: number) => void
    typeOfComponent: 'register' | 'transaction'
}

export const PerPageComponet = (props: PerPageComponetType) => {
    const {perPage, setPerPage, typeOfComponent} = {...props}
    const handleChange = (event: SelectChangeEvent) => {
        setPerPage(Number(event.target.value));
    };
    useEffect(() => {
        if (typeOfComponent === 'transaction') {
            localStorage.setItem('perPage', perPage.toString())
        }
        if (typeOfComponent === 'register') {
            localStorage.setItem('perPageRegister', perPage.toString())
        }

    }, [perPage]);
    return (
        <div className={style.CountOfPagesBlock}>
            <p className={style.CountOfPages}>
                Rows per page:
            </p>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                variant={'standard'}
                className={style.Select}
                value={perPage.toString()}
                onChange={handleChange}
            >
                <MenuItem value={50} className={style.PageCount}>50</MenuItem>
                <MenuItem value={100} className={style.PageCount}>100</MenuItem>
                <MenuItem value={200} className={style.PageCount}>200</MenuItem>
            </Select>

        </div>
    )
}