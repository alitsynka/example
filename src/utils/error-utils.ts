import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType, setErrorAC} from "../state/appReducer";
import {ResponseType} from "../state/types";
import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {setIsLoggedInAC} from "../state/authReducer";


export const handleAppServerError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]));
    } else {
        dispatch(setErrorAC('some error occured'))
    }
    dispatch(setAppStatusAC('failed'))
}
export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType | ReturnType<typeof setIsLoggedInAC>>) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
        dispatch(setIsLoggedInAC(false))

    }
    dispatch(setErrorAC(error.message ? error.message : 'some error happened'));
    dispatch(setAppStatusAC('failed'))
}