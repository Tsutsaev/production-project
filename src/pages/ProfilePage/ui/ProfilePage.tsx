import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
    profileReducer,
    fetchProfileData,
    profileActions,
    getProfileReadOnly,
    getProfileForm,
} from 'entities/Profile';
import { useAppDispatch, useAppSelector } from 'app/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector(getProfileForm);
    const isLoading = useAppSelector(getProfileIsLoading);
    const error = useAppSelector(getProfileError);
    const readOnly = useAppSelector(getProfileReadOnly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );
    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(' ', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
