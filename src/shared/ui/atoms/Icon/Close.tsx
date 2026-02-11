import React from 'react';
import { getIconAccessibilityProps, type IconProps } from './iconProps';

export const Close: React.FC<IconProps> = ({
  width = 16,
  height = 16,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  'data-testid': dataTestId = 'icon-close',
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 16 16"
    data-testid={dataTestId}
    {...rest}
    {...getIconAccessibilityProps(ariaLabel, ariaHidden)}
  >
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
  </svg>
);
