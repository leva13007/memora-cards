import { Decks } from './Decks.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Page/Decks',
  component: Decks,
  tags: ['autodocs'],
  decorators: []
} satisfies Meta<typeof Decks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
