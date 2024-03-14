import style from './Users.module.scss';
import {Button, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";


export default function Users() {

    const [notifyValue, setNotifyValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [users, setUsers] = useState([
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Evgeniy'},
        {id: 4, name: 'Roman'},
    ])
    const deleteUser = (id: number) => {
        setUsers([...users.filter(u => u.id !== id)])
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <h3>Для добавления бота с уведомлениями в группу,
                    необходимо добавить самого бота,
                    а так же указать ниже
                    chatID и нажать "Добавить"</h3>
                <div className={style.Box1}>
                    <h4>Добавить уведомления в чат/группу</h4>
                    <div className={style.Filter}>

                        <TextField value={notifyValue} onChange={(e) => setNotifyValue(e.currentTarget.value)}
                                   className={style.TextField}
                                   placeholder={'Не задан'}/>
                        <button className={style.Apply} onClick={() => setNotifyValue('')}>
                            Добавить
                        </button>
                    </div>
                </div>
                <div className={style.Box1}>
                    <h4>Добавить пользователя</h4>
                    <div className={style.Filter}>
                        <TextField value={nameValue} onChange={(e) => setNameValue(e.currentTarget.value)}
                                   className={style.TextField}
                                   placeholder={'Пользователь'}/>
                        <button className={style.Apply} onClick={() => setNameValue('')}>
                            Добавить
                        </button>
                    </div>
                </div>
                <div className={style.Box1}>
                    <h4>Пользователи с персональными уведомлениями:</h4>
                    {
                        users.map(u => {
                            return (
                                <div className={style.FilterUser}>
                                    <p>{u.name}</p>
                                    <Button className={style.DeleteButton} onClick={() => deleteUser(u.id)}>
                                        <DeleteIcon/>
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}