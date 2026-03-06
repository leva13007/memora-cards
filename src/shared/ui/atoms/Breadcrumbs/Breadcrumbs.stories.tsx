import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs.tsx';

const meta = {
  title: 'UI/Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ]
  },
  argTypes: {
    'items': {
      control: { type: 'object' }
    },
    'separator': {
      control: { type: 'text' }
    },
    'data-testid': {
      type: 'string'
    }
  }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    separator: '/'
  }
};

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Current Page', link: '/current' }
    ]
  }
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Very Long Category Name That Might Overflow', link: '/long-category' },
      { label: 'Another Extremely Long Subcategory Name Here', link: '/long-category/sub' },
      { label: 'Current Product Page With Very Long Title That Could Cause Layout Issues' }
    ]
  }
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    separator: '>'
  }
};

export const WithExtraClasses: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    className: ['custom-breadcrumb', 'additional-class']
  }
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Current Page', link: '/current' }
    ]
  }
};
