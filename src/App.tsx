import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./protectedRoute/ProtectedRoute";
import DefaultLayout from "./layout/DefaultLayout";
import Page404 from "./pages/page404/Page404";
import Page500 from "./pages/page500/Page500";
import {LoginPage} from "./pages/login/Login";
import './assets/styles/reset.css';

function App() {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Navigate to="/users" replace/>}/>
                    {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
                    <Route path="/404" element={<Page404/>}/>
                    <Route path="/500" element={<Page500/>}/>
                    <Route path="*" element={
                        <ProtectedRoute>
                            <DefaultLayout/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
