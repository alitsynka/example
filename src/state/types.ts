import {ComponentType, LazyExoticComponent} from "react";

export type RoutesType = {
    path: string
    index: boolean
    element: LazyExoticComponent<ComponentType<any>>
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
    token: string
}
export type UserWalletsArrayType = {
    userName: string
    Btc: string
    Eth: string
    Bnb: string
    id: string
    balance: number
    mode: 'edit' | 'static'
}