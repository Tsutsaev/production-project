import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'Tsutsaev',
    first: 'Tsutsaev',
    city: 'asd',
    currency: Currency.RUB,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(undefined);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
