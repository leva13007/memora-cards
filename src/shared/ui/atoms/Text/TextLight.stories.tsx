import { TextLight } from './Text.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Atoms/TextLight',
  component: TextLight,
  tags: ['autodocs'],
  args: {
    children: 'Title'
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof TextLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  args: {
    children: 'Title'
  }
};

export const RedTitle: Story = {
  args: {
    children: 'Red Title',
    style: { color: 'red' }
  }
};

export const WithExtraClasses: Story = {
  args: {
    children: 'Title with Extra Classes',
    className: ['extra-class-1', 'extra-class-2']
  }
};

export const CustomTestId: Story = {
  args: {
    'children': 'Title with Custom Test ID',
    'data-testid': 'custom-h1'
  }
};
