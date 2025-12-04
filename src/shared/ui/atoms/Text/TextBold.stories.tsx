import { TextBold } from './Text.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Atoms/TextBold',
  component: TextBold,
  tags: ['autodocs'],
  args: {
    children: 'Title'
  },
  argTypes: {
    children: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof TextBold>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const Warning: Story = {
  args: {
    children: 'Warning text',
    variant: 'warning'
  }
};

export const Primary: Story = {
  args: {
    children: 'Primary text',
    variant: 'primary'
  }
};

export const Paragraph: Story = {
  args: {
    children: 'Lorem ipsum sit amet',
    as: 'p'
  }
};

export const Span: Story = {
  args: {
    children: 'Lorem ipsum sit amet',
    as: 'span'
  }
};
