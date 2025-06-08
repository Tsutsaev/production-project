import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/common';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
