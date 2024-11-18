import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

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

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/login',
                authData,
                { withCredentials: true },
            );
            if (!response.data || !isUser(response.data)) {
                throw new Error('Invalid data');
            }
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
