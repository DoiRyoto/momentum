import type { Meta, StoryObj } from '@storybook/react';
import { TicketStatusToggle } from './TicketStatusToggle';

const meta: Meta<typeof TicketStatusToggle> = {
  title: 'Model/Ticket/TicketStatusToggle',
  component: TicketStatusToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDone: {
      control: { type: 'boolean' },
    },
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
    isDone: false,
    color: 'blue',
  },
};

export const Done: Story = {
  args: {
    isDone: true,
    color: 'green',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-2">
        <span>Not Done</span>
        <div className="flex gap-2">
          <TicketStatusToggle isDone={false} color="black" />
          <TicketStatusToggle isDone={false} color="blue" />
          <TicketStatusToggle isDone={false} color="green" />
          <TicketStatusToggle isDone={false} color="red" />
          <TicketStatusToggle isDone={false} color="purple" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>Done</span>
        <div className="flex gap-2">
          <TicketStatusToggle isDone={true} color="black" />
          <TicketStatusToggle isDone={true} color="blue" />
          <TicketStatusToggle isDone={true} color="green" />
          <TicketStatusToggle isDone={true} color="red" />
          <TicketStatusToggle isDone={true} color="purple" />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    isDone: false,
    color: 'teal',
  },
};