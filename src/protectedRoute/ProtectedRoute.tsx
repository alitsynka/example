import React, {FC} from "react";
import {useSelector} from "react-redux";

import {Navigate} from "react-router-dom";

interface Props {
    children: JSX.Element
}

export const ProtectedRoute: FC<Props> = ({children}) => {
    const isLoggedIn = true


    return (
        <>
            {
                isLoggedIn ? (
                    children
                ) : (
                    <Navigate to="/login" replace/>
                )
            }
        </>
    )
}