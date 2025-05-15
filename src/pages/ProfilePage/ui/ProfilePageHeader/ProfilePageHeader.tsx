import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'app/hooks/useAppDispatch';
import { getProfileReadOnly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readOnly = useAppSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readOnly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
