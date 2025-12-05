import { TextLink } from './TextLink.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextMedium } from '../Text/Text.tsx';

const meta = {
  title: 'UI/Atoms/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {
    content: 'test link'
  },
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'TextLink to somewhere\n this is new line',
    to: '/'
  }
};

export const RedTitle: Story = {
  args: {
    content: 'Red TextLink',
    style: { color: 'red' },
    to: '/'
  }
};

export const WithExtraClasses: Story = {
  args: {
    content: 'TextLink with Extra Classes',
    className: ['extra-class-1', 'extra-class-2'],
    to: '/'
  }
};

export const CustomTestId: Story = {
  args: {
    'content': 'TextLink with Custom Test ID',
    'data-testid': 'custom-h1',
    'to': '/'
  }
};

export const InsideParagraph: StoryObj<typeof meta> = {
  args: {
    content: 'click here',
    to: '/'
  },
  render: args => (
    <TextMedium>
      This is some text before the link,
      {' '}
      <TextLink {...args}>click here</TextLink>
      {' '}
      to continue reading.
    </TextMedium>
  )
};
