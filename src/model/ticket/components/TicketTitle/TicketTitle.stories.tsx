import type { Meta, StoryObj } from '@storybook/react';
import { TicketTitle } from './TicketTitle';

const meta: Meta<typeof TicketTitle> = {
  title: 'Model/Ticket/TicketTitle',
  component: TicketTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'blue', 'green', 'red', 'yellow', 'purple', 'orange', 'pink', 'teal', 'indigo', 'gray', 'deepBlue', 'deepGreen', 'deepRed', 'deepYellow', 'deepPurple', 'deepOrange', 'deepPink', 'deepTeal', 'deepIndigo', 'deepGray'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'チケットタイトル',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <TicketTitle color="black">Black ticket title</TicketTitle>
      <TicketTitle color="blue">Blue ticket title</TicketTitle>
      <TicketTitle color="green">Green ticket title</TicketTitle>
      <TicketTitle color="red">Red ticket title</TicketTitle>
      <TicketTitle color="purple">Purple ticket title</TicketTitle>
      <TicketTitle color="deepBlue">Deep Blue ticket title</TicketTitle>
      <TicketTitle color="deepRed">Deep Red ticket title</TicketTitle>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive ticket title',
    color: 'blue',
  },
};