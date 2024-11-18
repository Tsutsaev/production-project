import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    render: (...args) => <Navbar />,
    decorators: [StoreDecorator({})],
};
export const Dark: Story = {
    render: (...args) => <Navbar />,
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const AuthNavbar: Story = {
    render: (...args) => <Navbar />,
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
