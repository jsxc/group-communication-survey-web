export const replaceAt = <T>(index: number) => (replacement: T) => (
  array: T[],
): T[] => {
  return array
    .slice(0, index)
    .concat(replacement)
    .concat(array.slice(index + 1));
};
