import type { Meta, StoryObj } from '@storybook/react';
import { Ticket } from './Ticket';

const meta: Meta<typeof Ticket> = {
  title: 'Model/Ticket/Ticket',
  component: Ticket,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'blue', 'green', 'red', 'yellow', 'purple', 'orange', 'pink', 'teal', 'indigo', 'gray'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'サンプルチケット',
    tags: ['React', 'TypeScript', 'UI'],
    color: 'blue',
    isDone: false,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Ticket title="Black Ticket" tags={['tag1', 'tag2']} color="black" />
      <Ticket title="White Ticket" tags={['tag1', 'tag2']} color="white" />
      <Ticket title="Blue Ticket" tags={['tag1', 'tag2']} color="blue" />
      <Ticket title="Green Ticket" tags={['tag1', 'tag2']} color="green" />
      <Ticket title="Red Ticket" tags={['tag1', 'tag2']} color="red" />
      <Ticket title="Yellow Ticket" tags={['tag1', 'tag2']} color="yellow" />
      <Ticket title="Purple Ticket" tags={['tag1', 'tag2']} color="purple" />
      <Ticket title="Orange Ticket" tags={['tag1', 'tag2']} color="orange" />
    </div>
  ),
};

export const WithManyTags: Story = {
  args: {
    title: 'タグの多いチケット',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind', 'Components', 'Frontend', 'Development'],
    color: 'purple',
  },
};

export const Done: Story = {
  args: {
    title: '完了したチケット',
    tags: ['completed', 'done'],
    color: 'green',
    isDone: true,
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive ticket',
    tags: ['interactive', 'demo'],
    color: 'teal',
    isDone: false
  },
};