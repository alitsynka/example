import {TableCell, TableRow, TextField} from "@mui/material";
import style from "./Сonclusion.module.scss";
import {useState} from "react";

type WalletRowPropsType = {
    network: string,
    adress: string,
    minValue: number
    gaz: number
    id: number
}

export const ConclusionRow = (props: WalletRowPropsType) => {

    const [adress, setAdress] = useState(props.adress);
    const [minValue, setMinValue] = useState(props.minValue);
    const [gaz, setGaz] = useState(props.gaz);

    return (
        <TableRow className={style.TableRow}>
            <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                {props.network}
            </TableCell>
            <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                {/*<TextField id="outlined-basic" label="Outlined" variant="outlined"  className={style.TextField}/>*/}
                <TextField id="standard-basic" variant="standard"
                           value={adress}
                           onChange={(e) => setAdress(e.currentTarget.value)}
                />
            </TableCell>
            <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                <input id="standard-basic"
                       value={minValue}
                       type={'number'}
                       className={style.InputNumber}
                       onChange={(e) => setMinValue(e.target.valueAsNumber)}

                />
            </TableCell>
            <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                <input id="standard-basic"
                       value={gaz}
                       type={'number'}
                       className={style.InputNumber}
                       onChange={(e) => setGaz(e.target.valueAsNumber)}
                />
            </TableCell>
            <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                Sat
            </TableCell>
        </TableRow>
    )
}