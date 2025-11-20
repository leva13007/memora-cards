export const cx = (...classNames: (string | undefined | false | null)[]): string => {
  return classNames.flat(Infinity).filter(Boolean).join(' ');
};
