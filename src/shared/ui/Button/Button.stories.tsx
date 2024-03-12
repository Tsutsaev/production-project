import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
    },
    render: (args) => <Button {...args} />,
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    render: (args) => <Button {...args} />,
}
Clear.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    render: (args) => <Button {...args} />,
}
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    render: (args) => <Button {...args} />,
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
