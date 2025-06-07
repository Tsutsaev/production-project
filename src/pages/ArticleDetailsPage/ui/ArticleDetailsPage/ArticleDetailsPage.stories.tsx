import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
    title: 'shared/ArticleDetailsPage',
    component: ArticleDetailsPage,
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    render: (args) => <ArticleDetailsPage {...args} />,
};
Normal.decorators = [];
