import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
