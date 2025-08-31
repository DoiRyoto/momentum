import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'blue', 'green', 'red', 'yellow', 'purple', 'orange', 'pink', 'teal', 'indigo', 'gray'],
    },
    as: {
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Text color="black">Black text</Text>
      <Text color="white">White text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="green">Green text</Text>
      <Text color="red">Red text</Text>
      <Text color="yellow">Yellow text</Text>
      <Text color="purple">Purple text</Text>
      <Text color="orange">Orange text</Text>
      <Text color="pink">Pink text</Text>
      <Text color="teal">Teal text</Text>
      <Text color="indigo">Indigo text</Text>
      <Text color="gray">Gray text</Text>
    </div>
  ),
};

export const Elements: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Text as="h1" color="blue">Heading 1</Text>
      <Text as="h2" color="green">Heading 2</Text>
      <Text as="h3" color="red">Heading 3</Text>
      <Text as="p" color="purple">This is a paragraph text</Text>
      <Text as="span" color="orange">This is a span text</Text>
      <Text as="label" color="teal">This is a label</Text>
      <Text as="div" color="indigo">This is a div text</Text>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive text example',
    color: 'blue',
    as: 'p',
  },
};