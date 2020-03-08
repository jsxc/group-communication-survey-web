import { randomId } from './random';

export const constructRadioOptions = (label: string) => {
  return {
    id: randomId(),
    value: label,
    label,
  };
};
