import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { type StateSchema } from './StateSchema';
import { loginReducer } from 'features/AuthByUserName';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// Создаем временный store для получения типов RootState и AppDispatch
const tempStore = createReduxStore();

export type RootState = ReturnType<typeof tempStore.getState>;
export type AppDispatch = typeof tempStore.dispatch;
