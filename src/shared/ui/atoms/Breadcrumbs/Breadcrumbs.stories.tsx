import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs.tsx';

const meta = {
  title: 'UI/Atoms/Breadcrumbs',
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
    items: {
      control: { type: 'object' }
    },
    variant: {
      control: { type: 'select' },
      options: ['truncate', 'wrap']
    },
    separator: {
      control: { type: 'text' }
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
      { label: 'Current Page' }
    ]
  }
};

export const FourItems: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Category', link: '/category' },
      { label: 'Subcategory', link: '/category/sub' },
      { label: 'Current Page' }
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

export const WithTruncateBehaviour: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Very Long Category Name That Might Overflow', link: '/long-category' },
      { label: 'Another Extremely Long Subcategory Name Here', link: '/long-category/sub' },
      { label: 'Current Product Page With Very Long Title That Could Cause Layout Issues' }
    ],
    variant: 'truncate'
  }
};

export const WithWrapBehaviour: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Very Long Category Name That Might Overflow', link: '/long-category' },
      { label: 'Another Extremely Long Subcategory Name Here', link: '/long-category/sub' },
      { label: 'Current Product Page With Very Long Title That Could Cause Layout Issues' }
    ],
    variant: 'wrap'
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

export const CustomSeparatorWithSpaces: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    separator: ' › '
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

export const CustomStyles: Story = {
  args: {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    style: {
      fontSize: '18px',
      padding: '16px',
      backgroundColor: '#6c3f3f'
    }
  }
};

export const CustomTestId: Story = {
  args: {
    'items': [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Current Page' }
    ],
    'data-testid': 'custom-breadcrumbs-id'
  }
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Current Page' }
    ]
  }
};
