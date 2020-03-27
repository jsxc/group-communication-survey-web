import React from 'react';
import {
  Box,
  Text,
  RadioButtonGroup as RadioGroup,
  RadioButtonGroupProps,
  BoxProps,
} from 'grommet';
import { constructRadioOptions, obscureScaleLabels } from '../utilities';

type Props = BoxProps &
  RadioButtonGroupProps & {
    options: string[];
    scale?: boolean;
    firstOptionLabel?: string;
    lastOptionLabel?: string;
  };

const RadioButtonGroup: React.FC<Props> = props => {
  const {
    options,
    scale = false,
    firstOptionLabel = '',
    lastOptionLabel = '',
    ...rest
  } = props;

  let adaptedOptions = options.map(constructRadioOptions);

  if (scale) {
    adaptedOptions = adaptedOptions.map(obscureScaleLabels);
  }

  return (
    <Box direction={rest.direction}>
      {scale ? (
        <Text style={{ marginRight: 12 }}>{firstOptionLabel}</Text>
      ) : null}

      <RadioGroup {...rest} options={adaptedOptions} />

      {scale ? <Text style={{ marginLeft: 12 }}>{lastOptionLabel}</Text> : null}
    </Box>
  );
};

export default RadioButtonGroup;
