import style from './Wallets.module.scss'
import {Button, TableCell, TableRow, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {UserWalletsArrayType} from "../../state/types";
import {useState} from "react";

type UserWalletsType = {
    userName: string
    Btc: string
    Eth: string
    Bnb: string
    id: string
    balance: number
    mode: 'edit' | 'static'
}

export const UserWallets = (props: UserWalletsArrayType) => {

    const [name, setName] = useState(props.userName)
    const [adress, setAddress] = useState(props.id)
    const [btcValue, setBtcValue] = useState(props.Btc)
    const [ethValue, setEthValue] = useState(props.Eth)
    const [bnbValue, setBnbValue] = useState(props.Bnb)
    console.log(name)
    return (
        <TableRow className={style.TableRow} key={props.id}>
            <TableCell className={`${style.TableCell} ${style.NameTableCell}`}>
                <TextField id="Name" variant="standard" value={name}
                           onChange={(e) => setName(e.currentTarget.value)}
                           placeholder={'Name'} autoFocus={props.mode === 'edit'}
                           focused={props.mode === 'edit'}/>
            </TableCell>
            <TableCell className={`${style.TableCell} `}>
                <TextField id="standard-basic"
                           variant="standard"
                           value={adress}
                           onChange={(e) => setAddress(e.currentTarget.value)}
                           placeholder={'ID'}/>
            </TableCell>
            <TableCell className={`${style.TableCell}`}>
                <TextField id="standard-basic"
                           variant="standard"
                           value={btcValue}
                           onChange={(e) => setBtcValue(e.currentTarget.value)}
                           placeholder={'Btc'}/>
            </TableCell>
            <TableCell className={`${style.TableCell}`}>
                <TextField id="standard-basic" variant="standard"
                           value={ethValue}
                           onChange={(e) => setEthValue(e.currentTarget.value)}
                           placeholder={'Eth'}/>
            </TableCell>
            <TableCell className={`${style.TableCell}`}>
                <TextField id="standard-basic" variant="standard"
                           value={bnbValue}
                           onChange={(e) => setBnbValue(e.currentTarget.value)}
                           placeholder={'Bnb'}/>
            </TableCell>

            <TableCell className={`${style.TableCell}`}>
                <Button className={style.ApplyBtn} variant={'outlined'}>Apply</Button>
            </TableCell>
        </TableRow>
    )
}