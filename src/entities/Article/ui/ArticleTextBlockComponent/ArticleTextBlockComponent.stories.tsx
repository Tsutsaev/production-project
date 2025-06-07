import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";

const meta = {
  title: "shared/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  render: (args) => <ArticleTextBlockComponent {...args} />
};
Normal.decorators = [];