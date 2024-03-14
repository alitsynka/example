import {lazy} from 'react';
import {RoutesType} from "../state/types";



const Users = lazy(() => import('../pages/users/Users'));
const Сonclusion = lazy(() => import('../pages/conclusion/Сonclusion'));
const Wallets = lazy(() => import('../pages/wallets/Wallets'));


const routes: RoutesType[] = [
    {path: '/users', element: Users, index:true},
    {path: '/wallets', element: Wallets, index:false},
    {path: '/conclusion', element: Сonclusion, index:false},

]

export default routes
