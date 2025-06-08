import { DeepPartial } from 'shared/types/common';
import {
    profileActions,
    profileReducer,
    ProfileSchema,
    updateProfileData,
    ValidateProfileError,
} from 'entities/Profile';
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

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateError: [],
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '2123',
                }),
            ),
        ).toEqual({
            form: {
                username: '2123',
            },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending('', undefined),
            ),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '', undefined),
            ),
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
