import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = { render: (...args) => <Sidebar /> }
export const Dark: Story = {
    render: (...args) => <Sidebar />,
    decorators: [ThemeDecorator(Theme.DARK)],
}
