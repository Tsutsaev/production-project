import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from  'shared/assets/tests/storybook.jpg'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'Tsutsaev',
            first: 'Tsutsaev',
            city: 'asd',
            currency: Currency.RUB,
            avatar,
        },
    },
};

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
