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
    options: string[] | { [value: string]: string };
    scale?: boolean;
    other?: boolean;
    firstOptionLabel?: string;
    lastOptionLabel?: string;
    onOtherAnswerChange?: (newAnswer: string) => void;
  };

const RadioButtonGroup: React.FC<Props> = (props) => {
  const {
    value = '',
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

  const values = Array.isArray(options)
    ? (options as string[])
    : Object.keys(options);
  const isValueInOptions = values
    .map((option) => (option as string).toLowerCase())
    .includes(value && value.toLowerCase());

  let adaptedOptions = Array.isArray(options)
    ? options.map(constructRadioOptions)
    : Object.keys(options).map((value) => {
        return {
          id: randomId(),
          value,
          label: options[value],
        };
      });

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
          value={isOtherOptionChecked ? '' : value}
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
                handleChangedValue('');
              }}
              onChange={() => undefined}
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
          value={isValueInOptions || !value ? '' : value}
          onChange={(event) => {
            const { value } = event.target;
            handleChangedValue(value);
          }}
        />
      ) : null}
    </>
  );
};

export default RadioButtonGroup;
