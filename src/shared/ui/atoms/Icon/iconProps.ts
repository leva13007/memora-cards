import type React from 'react';

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'aria-label'> & {
  'aria-label'?: string
  'data-testid'?: string
};

const normalizeBooleanish = (value?: React.AriaAttributes['aria-hidden']) => {
  if (value === undefined) {
    return undefined;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return Boolean(value);
};

export const getIconAccessibilityProps = (
  ariaLabel?: string,
  ariaHidden?: React.AriaAttributes['aria-hidden']
) => {
  const normalizedLabel = ariaLabel?.trim();
  const normalizedHidden = normalizeBooleanish(ariaHidden);

  if (normalizedHidden !== undefined) {
    return {
      'role': normalizedHidden ? undefined : 'img',
      'aria-hidden': normalizedHidden,
      ...(normalizedLabel ? { 'aria-label': normalizedLabel } : {})
    };
  }

  if (normalizedLabel) {
    return {
      'role': 'img' as const,
      'aria-label': normalizedLabel,
      'aria-hidden': false
    };
  }

  return {
    'role': 'presentation' as const,
    'aria-hidden': true
  };
};
