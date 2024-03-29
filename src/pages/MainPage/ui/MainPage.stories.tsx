import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {}
Normal.decorators = [ThemeDecorator(Theme.DARK)]
