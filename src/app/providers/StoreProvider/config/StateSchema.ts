import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    Action,
    EnhancedStore,
    Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';

type CombinedState<S> = {
    [K in keyof S]: S[K];
};
export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export interface StateSchema {
    user: UserSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}