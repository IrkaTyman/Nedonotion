import { RouteProps, Navigate } from 'react-router-dom';

import { authRouteConfig } from '@pages/auth';

export const routeConfig = (isAuth: boolean): RouteProps[] => {
    let routes: RouteProps[] = [];

    if (isAuth) {
        routes = routes.concat([
            {
                path: '*',
                element: <Navigate to={'/'} />,
            },
        ]);
    } else {
        routes = routes.concat([
            ...authRouteConfig,
            {
                path: '*',
                element: <Navigate to={'/signin'} />,
            },
        ]);
    }

    return routes;
};
