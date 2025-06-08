import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { DeepPartial } from 'shared/types/common';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

const asyncReducers = { ...defaultAsyncReducers };

const root = createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <StoreProvider asyncReducers={asyncReducers}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
