import { random } from '../../../utilities';

export const constructRadioOptions = (label: string) => {
  return {
    id: randomId(),
    value: label,
    label,
  };
};

const randomId = (): string => {
  return String(random(1000, 9999));
};
