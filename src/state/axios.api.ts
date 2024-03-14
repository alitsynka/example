import axios, {AxiosResponse} from "axios";
import {getToken} from "../utils/utils";
import {ResponseType} from "./types";

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    headers: {}
})
export type LoginParamsType = {
    login: string
    password: string
}

export const personalAreaAPI = {
    getFilteredStatistics(data: StatisticsParamsType) {
        return instance.get<any>(`backoffice/personal-area/statistics?column=createdAt`, {
            params: data,
            headers: {Authorization: `Bearer ${getToken() || ''}`},
            withCredentials: true,
        });
    }
}


export const authApi = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType, AxiosResponse<ResponseType>, any>('backoffice/auth/login', data)
    }
}

export type StatisticsParamsType = {
    bank?: string
    type?: string
    terminal?: string
    billingType?: string
    createdFrom?: string | Date
    createdTo?: string | Date
}