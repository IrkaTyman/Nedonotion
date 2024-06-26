import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import '@shared/config/i18n';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';

import { QueryClientProvider } from 'react-query';

import { queryClient } from '@shared/config/query';
import '@shared/styles/index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
                <div id="modal-portal" />
                <div id="portal" />
            </QueryClientProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);
