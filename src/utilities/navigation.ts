export const getNextPathname = (pathname: string): string => {
  const screenIndex = Number(pathname.substring(1));
  return `/${screenIndex + 1}`;
};
