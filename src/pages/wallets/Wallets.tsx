import style from './Wallets.module.scss';
import {
    Button,
    MenuItem,
    Select,
    SelectChangeEvent,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {useState} from "react";
import {MonitorWallets} from "./MonitorWallets";
import {UserWallets} from "./UserWallets";
import {UserWalletsArrayType} from "../../state/types";


export default function Wallets() {

    const [currency, setCurrency] = useState('Не выбрано')
    const [seedPhrase, setSeedPhrase] = useState('')
    const [walletsMonitor, setWalletsMonitor] = useState([
        {currency: 'BTC', id: 123, balance: 1002345},
        {currency: 'Eth', id: 4566, balance: 1002345},
        {currency: 'AZE', id: 65657, balance: 289998},
    ])
    const [users, setUsers] = useState<UserWalletsArrayType[]>([
        {
            userName: 'Victor',
            Btc: '233fgd934nd',
            Eth: '98765tyfhtde4',
            Bnb: 'fddfd3342',
            id: '4928hfsdhfusw9',
            balance: 1002345,
            mode: 'static'
        },
        {
            userName: 'Ivan',
            Btc: '233fgd934nd',
            Eth: '98765tyfhtde4',
            Bnb: 'fddfd3342',
            id: '4928hfsdhfusw9',
            balance: 1002345,
            mode: 'static'
        },
        {
            userName: 'Roman',
            Btc: '233fgd934nd',
            Eth: '98765tyfhtde4',
            Bnb: 'fddfd3342',
            id: '4928hfsdhfusw9',
            balance: 289998,
            mode: 'static'
        }
    ])

    const addUser = () => {
        const newUser: UserWalletsArrayType = {
            userName: '',
            Btc: '',
            Eth: '',
            Bnb: '',
            id: '',
            balance: 0,
            mode: 'edit'
        };
        console.log(users)
        setUsers([...users, newUser])

    }
    console.log(users)

    const deleteMonitorWallet = (id: number) => {
        const walellet = walletsMonitor.filter(w => w.id !== id)
        setWalletsMonitor([...walletsMonitor.filter(w => w.id !== id)])
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <h3>Импортировать кошелек:</h3>
                <div className={style.Box1}>

                    <div className={style.Filter}>
                        <p>
                            Seed phrase
                        </p>
                        <TextField value={seedPhrase} onChange={(e) => setSeedPhrase(e.currentTarget.value)}
                                   className={style.TextField}
                                   placeholder={'Не задан'}/>

                    </div>
                    <div className={style.Filter}>
                        <p>
                            Сеть
                        </p>
                        <Select
                            labelId="paymethod"
                            id="paymethod"
                            variant={'standard'}
                            className={style.Select}
                            value={currency}
                            onChange={(event: SelectChangeEvent) => setCurrency(event.target.value)}
                            label={'Не выбрано'}
                        >
                            <MenuItem value={'Не выбрано'} className={style.MenuItem}>
                                Hе выбрано
                            </MenuItem>
                            <MenuItem value={'BTC'} className={style.MenuItem}>
                                BTC
                            </MenuItem>
                            <MenuItem value={'ETH'} className={style.MenuItem}>
                                ETH
                            </MenuItem>
                            <MenuItem value={'BNB'} className={style.MenuItem}>
                                BNB
                            </MenuItem>
                        </Select>
                    </div>
                    <div className={style.Filter}>
                        <button className={style.Apply}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.Container}>
                <h3>Кошельки на мониторинге:</h3>
                <TableContainer className={style.TableContainer}>
                    <Table className={style.Table}>
                        <TableHead className={style.TableHead}>
                            <TableRow className={style.TableRow}>
                                <TableCell className={`${style.TableCell}`}>
                                    Адрес
                                </TableCell>
                                <TableCell className={`${style.TableCell}`}>
                                    Валюта
                                </TableCell>
                                <TableCell className={`${style.TableCell}`}>
                                    Баланс
                                </TableCell>
                                <TableCell className={`${style.TableCell}`}>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={style.TableBody}>
                            {
                                walletsMonitor.map((w, index) => {
                                    return (
                                        <MonitorWallets id={w.id} currency={w.currency} key={index}
                                                        deleteMonitorWallet={deleteMonitorWallet}
                                                        balance={w.balance}/>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={style.Container}>
                <h3>Пользователи и их кошельки</h3>
                <div className={style.Box}>
                    <TableContainer className={style.TableContainer}>
                        <Table className={style.Table}>
                            <TableHead className={style.TableHead}>
                                <TableRow className={style.TableRow}>
                                    <TableCell className={`${style.TableCell}`}>
                                        userName
                                    </TableCell>
                                    <TableCell className={`${style.TableCell}`}>
                                        Адрес
                                    </TableCell>
                                    <TableCell className={`${style.TableCell}`}>
                                        Btc
                                    </TableCell>
                                    <TableCell className={`${style.TableCell}`}>
                                        Eth
                                    </TableCell>
                                    <TableCell className={`${style.TableCell}`}>
                                        Bnb
                                    </TableCell>
                                    <TableCell className={`${style.TableCell}`}>

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={style.TableBody}>
                                {
                                    users.map((w, index) => {
                                        return (
                                            <UserWallets id={w.id}
                                                         userName={w.userName}
                                                         Bnb={w.Bnb}
                                                         Eth={w.Eth}
                                                         Btc={w.Btc}
                                                         mode={w.mode}
                                                         key={index}
                                                         balance={w.balance}/>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={style.BtnsWr}>
                        <Button className={style.AddBtn} onClick={addUser}>Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}