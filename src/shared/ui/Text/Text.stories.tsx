import { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
        theme: TextTheme.ERROR,
    },
    render: (args) => <Text {...args} />,
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};

export const onlyText: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
    render: (args) => <Text {...args} />,
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
        size: TextSize.L,
    },
    render: (args) => <Text {...args} />,
};