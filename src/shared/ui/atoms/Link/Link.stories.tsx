import { Link } from './Link.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextMedium } from '../Text/Text.tsx';

const meta = {
  title: 'UI/Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'test link'
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title',
    to: '/'
  }
};

export const RedTitle: Story = {
  args: {
    children: 'Red Title',
    style: { color: 'red' },
    to: '/'
  }
};

export const WithExtraClasses: Story = {
  args: {
    children: 'Title with Extra Classes',
    className: ['extra-class-1', 'extra-class-2'],
    to: '/'
  }
};

export const CustomTestId: Story = {
  args: {
    'children': 'Title with Custom Test ID',
    'data-testid': 'custom-h1',
    'to': '/'
  }
};

export const InsideParagraph: StoryObj<typeof meta> = {
  args: {
    to: '/'
  },
  render: args => (
    <TextMedium>
      This is some text before the link,
      {' '}
      <Link {...args}>click here</Link>
      {' '}
      to continue reading.
    </TextMedium>
  )
};
