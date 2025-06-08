import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface loginByUsernameProps {
    username: string;
    password: string;
}
// Функция для проверки типа данных
function isUser(data: any): data is User {
    return (
        data && typeof data.id === 'string' && typeof data.username === 'string'
    );
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<User>('/login', authData, {
            withCredentials: true,
        });
        if (!response.data || !isUser(response.data)) {
            throw new Error('Invalid data');
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('Error');
    }
});
