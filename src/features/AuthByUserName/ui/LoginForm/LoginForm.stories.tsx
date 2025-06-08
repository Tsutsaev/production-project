import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSuccess: () => {},
    },
    render: (args) => <LoginForm {...args} />,
    decorators: [
        StoreDecorator(
            {
                loginForm: { username: 'admin', password: 'asd' },
            },
            {},
        ),
    ],
};

export const withError: Story = {
    args: {
        onSuccess: () => {},
    },
    render: (args) => <LoginForm {...args} />,
    decorators: [
        StoreDecorator(
            {
                loginForm: {
                    username: 'admin',
                    password: 'asd',
                    error: 'ERROR',
                },
            },
            {},
        ),
    ],
};

export const Loading: Story = {
    args: {
        onSuccess: () => {},
    },
    render: (args) => <LoginForm {...args} />,
    decorators: [
        StoreDecorator(
            {
                loginForm: { isLoading: true },
            },
            {},
        ),
    ],
};
