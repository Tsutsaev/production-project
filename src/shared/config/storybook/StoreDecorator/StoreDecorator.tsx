import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers:  DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
