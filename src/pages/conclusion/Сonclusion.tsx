import style from './Сonclusion.module.scss';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ConclusionRow} from "./ConclusionRow";
import {useState} from "react";


export default function Сonlusion() {
    const [conslusionState, setConslusionState] = useState([
        {
            network: 'ETH',
            adress: 'bc1asdasd34',
            minValue: 78,
            gaz: 45,
            id: 1,
        }, {
            network: 'BTC',
            adress: 'bc1asdasd34',
            minValue: 78,
            gaz: 45,
            id: 2,
        }, {
            network: 'BNB',
            adress: 'bc1asdasd34',
            minValue: 78,
            gaz: 45,
            id: 3,
        },
    ])

    function applyChanges() {

    }

    return (
        <div className={style.Wrapper}>
            <TableContainer className={style.TableContainer}>
                <div className={style.TableWr}>
                    <Table className={style.Table}>
                        <TableHead className={style.TableHead}>
                            <TableRow className={style.TableRow}>
                                <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                                    Сеть:
                                </TableCell>
                                <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                                    Адрес для вывода:
                                </TableCell>
                                <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                                    Мин. количество
                                </TableCell>
                                <TableCell className={`${style.TableCell} ${style.MessageCell}`}>
                                    Газ
                                </TableCell>
                                <TableCell className={`${style.TableCell} ${style.MessageCell}`}>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={style.TableBody}>
                            {conslusionState.map((tr, index) => {
                                return (
                                    <ConclusionRow network={tr.network}
                                                   adress={tr.network}
                                                   minValue={tr.minValue}
                                                   key={index}
                                                   gaz={tr.gaz} id={tr.id}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </TableContainer>
            <div className={style.BtnsWr}>
                <button className={style.ApplyBtn} onClick={applyChanges}>Сохранить</button>
            </div>
        </div>
    )
}