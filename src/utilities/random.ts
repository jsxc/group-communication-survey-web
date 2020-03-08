export const random = (minimum: number, maximum: number) => {
  return Math.floor(Math.random() * maximum) + minimum;
};

export const randomId = (): string => {
  return String(random(1000, 9999));
};
