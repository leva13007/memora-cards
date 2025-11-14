import { Body } from './Body.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Component/Body',
  component: Body,
  tags: ['autodocs'],
  args: {
    children: <h1>Title</h1>,
    className: ''
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark']
    },
    className: {
      control: { type: 'text' }
    },
    children: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  args: {
    theme: 'light',
    className: '',
    children: <h1>Title</h1>
  }
};
