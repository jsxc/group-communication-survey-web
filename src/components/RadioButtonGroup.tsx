import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Text,
  TextInput,
  RadioButton,
  RadioButtonGroup as GrommetRadioButtonGroup,
  RadioButtonGroupProps as GrommetRadioButtonGroupProps,
  BoxProps,
} from 'grommet';
import {
  constructRadioOptions,
  obscureScaleLabels,
  randomId,
} from '../utilities';

type Props = BoxProps &
  GrommetRadioButtonGroupProps & {
    value: string;
    options: string[];
    scale?: boolean;
    other?: boolean;
    firstOptionLabel?: string;
    lastOptionLabel?: string;
    onOtherAnswerChange?: (newAnswer: string) => void;
  };

const RadioButtonGroup: React.FC<Props> = props => {
  const {
    value,
    options,
    scale = false,
    other = false,
    firstOptionLabel = '',
    lastOptionLabel = '',
    onChange,
    onOtherAnswerChange,
    ...rest
  } = props;

  const [isOtherOptionChecked, setOtherOptionChecked] = useState(false);

  const isValueInOptions = options.includes(value);

  let adaptedOptions = options.map(constructRadioOptions);

  if (scale) {
    adaptedOptions = adaptedOptions.map(obscureScaleLabels);
  }

  const handleChangedValue = (value: string) => {
    onChange({ target: { value } } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <Box direction={rest.direction} style={{ marginLeft: 16 }}>
        {scale ? (
          <Text style={{ marginRight: 12 }}>{firstOptionLabel}</Text>
        ) : null}

        <GrommetRadioButtonGroup
          {...rest}
          focusIndicator={false}
          value={isOtherOptionChecked ? null : value}
          options={adaptedOptions}
          onChange={onChange}
          onClick={() => {
            setOtherOptionChecked(false);
          }}
        />

        {other ? (
          <Box style={{ marginTop: 12 }}>
            <RadioButton
              name={randomId()}
              label="Other"
              checked={isOtherOptionChecked}
              onClick={() => {
                setOtherOptionChecked(true);
                handleChangedValue(null);
              }}
            />
          </Box>
        ) : null}

        {scale ? (
          <Text style={{ marginLeft: 12 }}>{lastOptionLabel}</Text>
        ) : null}
      </Box>

      {isOtherOptionChecked ? (
        <TextInput
          style={{ marginTop: 16, marginLeft: 16, marginRight: 16 }}
          value={isValueInOptions ? '' : value}
          onChange={event => {
            const { value } = event.target;
            handleChangedValue(value);
          }}
        />
      ) : null}
    </>
  );
};

export default RadioButtonGroup;
