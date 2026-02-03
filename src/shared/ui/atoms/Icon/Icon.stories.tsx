import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, CSSProperties } from 'react';
import * as Icons from './index';
import type { IconProps } from './iconProps';

const iconEntries = (Object.entries(Icons)
  .filter(([, Component]) => typeof Component === 'function')) as Array<[
  string,
  ComponentType<IconProps>
]>;

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: '1rem',
  alignItems: 'center',
  padding: '1rem'
};

const itemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: '0.5rem',
  padding: '0.5rem'
};

const labelStyle: CSSProperties = {
  fontSize: '1rem',
  textAlign: 'center',
  wordBreak: 'break-word'
};

type GalleryProps = {
  iconProps?: IconProps
  getIconProps?: (name: string) => IconProps | undefined
};

const IconGalleryStory = ({ iconProps, getIconProps }: GalleryProps = {}) => (
  <div style={gridStyle}>
    {iconEntries.map(([name, Component]) => {
      const resolvedProps = getIconProps ? getIconProps(name) : iconProps;
      const labelColor = resolvedProps?.style?.color;
      const labelText = resolvedProps?.['aria-label'] ?? name;

      return (
        <div key={name} style={itemStyle}>
          <Component aria-hidden {...resolvedProps} />
          <span style={{ ...labelStyle, color: labelColor }}>{labelText}</span>
        </div>
      );
    })}
  </div>
);

const meta = {
  title: 'UI/Atoms/Icon',
  component: IconGalleryStory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Icon components supporting accessibility (a11y) and color inheritance (currentColor)'
      }
    }
  }
} satisfies Meta<typeof IconGalleryStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  name: 'All Icons',
  render: () => <IconGalleryStory />
};

export const GalleryRed: Story = {
  name: 'All Icons (Red)',
  render: () => (
    <IconGalleryStory
      iconProps={{ style: { color: '#ef4444' } }}
    />
  )
};

export const GalleryAccessible: Story = {
  name: 'All Icons (Accessible)',
  render: () => (
    <IconGalleryStory
      getIconProps={name => ({
        'aria-hidden': false,
        'aria-label': `${name} icon`
      })}
    />
  )
};
