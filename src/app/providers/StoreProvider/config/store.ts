import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { type StateSchema } from './StateSchema';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

// Создаем временный store для получения типов RootState и AppDispatch
const tempStore = createReduxStore();

export type RootState = ReturnType<typeof tempStore.getState>;
export type AppDispatch = typeof tempStore.dispatch;
