import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { DeepPartial } from 'shared/types/common';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export const TestAsyncThunk = <Return, Arg, RejectedValue>(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
) => {
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateSchema = jest.fn(() => state as StateSchema);
    const navigate: jest.MockedFn<any> = jest.fn();
    const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;

    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, { api, navigate });
        return result;
    };

    return {
        dispatch,
        getState,
        actionCreator,
        callThunk,
        api,
        navigate,
    };
};
