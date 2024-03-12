import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    render: (args) => <AppLink {...args} />,
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    render: (args) => <AppLink {...args} />,
}
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    render: (args) => <AppLink {...args} />,
}
Red.decorators = [ThemeDecorator(Theme.LIGHT)]

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    render: (args) => <AppLink {...args} />,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    render: (args) => <AppLink {...args} />,
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    render: (args) => <AppLink {...args} />,
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
