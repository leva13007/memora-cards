import { Home } from './Home.tsx';
import type {
  Meta,
  StoryObj
} from '@storybook/react-vite';

const meta = {
  title: 'Page/Home',
  component: Home,
  tags: ['autodocs'],
  decorators: []
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
