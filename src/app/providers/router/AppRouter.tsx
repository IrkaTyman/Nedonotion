import { Suspense } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';

import { auth } from '@shared/config/firebase';

import { routeConfig } from './config';

export const AppRouter = () => {
    const [user] = useAuthState(auth);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig(user != null).map(route => (
                    <Route
                        {...route}
                        key={route.path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
