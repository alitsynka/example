import style from './Switch.module.scss';
import {FormControlLabel, Switch} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";

type SwitcherType = {
    updatePage: boolean
    setUpdatePage: (tr: boolean) => void
    localStorageItem: 'StatisticsAutoUpdate' | 'TransactionsAutoUpdate' | 'RegistersAutoUpdate'
}
export const Switcher = (props: SwitcherType) => {
    const {setUpdatePage, updatePage, localStorageItem} = {...props}

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatePage(event.target.checked);
    };
    useEffect(() => {
        if (updatePage) {
            localStorage.setItem(localStorageItem, '1')
        } else {
            localStorage.removeItem(localStorageItem)
        }
    }, [updatePage]);
    return (
        <FormControlLabel
            value="end"
            control={<Switch checked={updatePage}
                             onChange={handleChange}
                             className={`${style.Switch} ${updatePage && style.SwitchChecked}`}
            />}
            label="Автообновление: "
            labelPlacement="end"
            className={style.FormControlLabel}
        />
    )
}