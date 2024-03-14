type InitialStateType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'failLogin' | 'loadingDownload'
    error: null | string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'failLogin' | 'loadingDownload'

export type SetAppErrorActionType = ReturnType<typeof setErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

export type ActionsAppType = SetAppErrorActionType | SetAppStatusActionType

const initialState: InitialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-ERROR": {
            return {...state, error: action.error}
        }
        default: {
            return {...state}
        }
    }
}

export const setErrorAC = (error: string | null) => ({type: "SET-ERROR", error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: "SET-STATUS", status} as const)