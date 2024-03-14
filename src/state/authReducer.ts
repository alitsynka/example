import {Dispatch} from "redux";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./appReducer";
import {authApi, LoginParamsType} from "./axios.api";
import {getToken, setToken} from "../utils/utils";


type InitialStateType = {
    isLoggedIn: boolean
}

export const initialState: InitialStateType = {
    isLoggedIn: true
}
export const AuthReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>) => {
    dispatch(setAppStatusAC('loading'))
    authApi.login(data)
        .then(res => {
            setToken(res.data.token)
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((err) => {
            dispatch(setAppStatusAC('failLogin'))
        })
}
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export type ActionsType = ReturnType<typeof setIsLoggedInAC>


