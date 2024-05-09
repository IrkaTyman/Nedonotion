import { RouteProps } from 'react-router-dom';

import { GreetingPage } from '@pages/auth/GreetingPage';
import { SignInPage } from '@pages/auth/SignInPage';
import { SignUpPage } from '@pages/auth/SignUpPage';

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
