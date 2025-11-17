import { Container } from './Container.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Component/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    children: 'Some inner Text'
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    fluid: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  args: {
    children: 'Title'
  }
};
