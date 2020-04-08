export const random = (minimum: number, maximum: number) => {
  return Math.floor(Math.random() * maximum) + minimum;
};

export const randomId = (): string => {
  return String(random(10000, 99999));
};
