import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

const meta = {
    title: 'widgets/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = { render: (...args) => <PageError /> }
export const Dark: Story = {
    render: (...args) => <PageError />,
    decorators: [ThemeDecorator(Theme.DARK)],
}