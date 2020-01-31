/**
 * Generates a random number between two bounds
 */
export const random = (minimum: number, maximum: number) => {
  return Math.floor(Math.random() * maximum) + minimum;
};
