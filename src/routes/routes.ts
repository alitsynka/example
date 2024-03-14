import {lazy} from 'react';
import {RoutesType} from "../state/types";



const Users = lazy(() => import('../pages/users/Users'));
const Сonclusion = lazy(() => import('../pages/conclusion/Сonclusion'));
const Wallets = lazy(() => import('../pages/wallets/Wallets'));


const routes: RoutesType[] = [
    {path: '/users', element: Users},
    {path: '/wallets', element: Wallets},
    {path: '/conclusion', element: Сonclusion},

]

export default routes
