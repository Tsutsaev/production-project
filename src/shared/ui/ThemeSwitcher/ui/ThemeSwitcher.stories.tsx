import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {}
Normal.decorators = [ThemeDecorator(Theme.DARK)]
