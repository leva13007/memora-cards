import { TextLink } from './TextLink.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextMedium } from '../Text/Text.tsx';

const meta = {
  title: 'UI/Atoms/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {
    content: 'test link',
    to: '/'
  },
  argTypes: {
    'content': {
      control: { type: 'text' }
    },
    'to': {
      control: { type: 'text' }
    },
    'data-testid': {
      type: 'string'
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

export const LinkHovered: Story = {
  args: {
    content: 'Hovered Link',
    to: '/',
    className: ['__hovered', 'additional-class']
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
    content: 'TextLink with Custom Test ID',
    to: '/'
  },
  render: args => (
    <TextLink {...args} data-testid="custom-h1" />
  )
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
      <TextLink {...args} />
      {' '}
      to continue reading.
    </TextMedium>
  )
};
