import {Button, TableCell, TableRow} from "@mui/material";
import style from "./Wallets.module.scss";
import DeleteIcon from '@mui/icons-material/Delete';

type MonitorWalletsType = {
    id: number
    currency: string
    balance: number
    deleteMonitorWallet: (id: number) => void
}
export const MonitorWallets = (props: MonitorWalletsType) => {
    return (
        <TableRow className={style.TableRow} key={props.id}>
            <TableCell className={`${style.TableCell} `}>
                kjfsd45663khfksdifiwe1323
            </TableCell>
            <TableCell className={`${style.TableCell} `}>
                Btc
            </TableCell>
            <TableCell className={`${style.TableCell}`}>
                balance
            </TableCell>

            <TableCell className={`${style.TableCell}`}>
                <Button className={style.DeleteButton} onClick={() => {
                    console.log(props.id)
                    props.deleteMonitorWallet(props.id)
                }}>
                    <DeleteIcon/>
                </Button>
            </TableCell>
        </TableRow>
    )
}