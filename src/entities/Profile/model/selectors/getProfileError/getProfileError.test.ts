import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/common';
import { getProfileError } from './getProfileError';


describe('getProfileError.test', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
