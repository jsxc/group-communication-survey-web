import { random } from '../../../utilities';

export const constructRadioOptions = (label: string, index: number) => {
  return {
    id: randomId(),
    value: String(index),
    label,
  };
};

const randomId = (): string => {
  return String(random(1000, 9999));
};
