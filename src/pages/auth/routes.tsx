import { RouteProps } from 'react-router-dom';

import { GreetingPage } from './GreetingPage';
import { SignInPage } from './SignInPage';
import { SignUpPage } from './SignUpPage';

export const authRouteConfig: RouteProps[] = [
    {
        path: '/',
        element: <GreetingPage />,
    },
    {
        path: '/signin',
        element: <SignInPage />,
    },
    {
        path: '/signup',
        element: <SignUpPage />,
    },
];
