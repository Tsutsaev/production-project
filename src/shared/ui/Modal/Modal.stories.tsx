import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus maiores autem ratione, quas ipsam, consectetur, quae commodi aliquid placeat accusamus obcaecati ducimus nam eius? Libero nam odit repudiandae itaque ab!',
    },
    render: (args) => <Modal {...args} />,
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus maiores autem ratione, quas ipsam, consectetur, quae commodi aliquid placeat accusamus obcaecati ducimus nam eius? Libero nam odit repudiandae itaque ab!',
    },
    render: (args) => <Modal {...args} />,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
