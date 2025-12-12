export const clx = (cssModuleObject: Record<string, string>, ...cls: (string | undefined | false | null)[]): string => {
  const incomingClasses = ((cls || []).flat(Infinity).filter(Boolean) as string[]).map(cl => cssModuleObject[cl] ?? cl);
  return incomingClasses.join(' ');
};
