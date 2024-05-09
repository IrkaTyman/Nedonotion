import { RouteProps } from 'react-router-dom';

export const authRouteConfig: RouteProps[] = [
    {
        path: '*',
        element: <p style={{ color: 'red' }}>Not found page</p>,
    },
];
