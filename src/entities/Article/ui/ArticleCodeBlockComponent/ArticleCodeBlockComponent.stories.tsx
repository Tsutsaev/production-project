import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";

const meta = {
  title: "shared/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  render: (args) => <ArticleCodeBlockComponent {...args} />
};
Normal.decorators = [];