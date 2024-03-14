import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {AuthReducer} from "./authReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    auth: AuthReducer,
    app: appReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store