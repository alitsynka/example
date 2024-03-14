import {Route, Routes} from "react-router-dom";

import React from "react";
import routes from "../../routes/routes";

const MainContent = () => {
    return (
        <>
            <Routes>
                {
                    routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={<route.element/>}
                                />
                            )
                        )
                    })}
            </Routes>
        </>
    )
}
export default MainContent