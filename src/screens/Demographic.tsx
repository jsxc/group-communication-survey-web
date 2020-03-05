import React, { useState } from 'react';
import {
  Box,
  Form,
  Heading,
  FormField,
  Button,
  RadioButtonGroup,
  WorldMap,
} from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../components';
import { useGlobalState } from '../hooks';
import { isNull } from '../utilities';

const Demographic: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasAgeBeenBlurred: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Specify your sex:': sex,
    'How old are you?': age,
    'Which region are you from?': region,
  } = data;
  const { hasAgeBeenBlurred } = state;

  const setSex = (sex: string) => {
    return setData(data => ({ ...data, 'Specify your sex:': sex }));
  };

  const setAge = (age: number) => {
    return setData(data => ({ ...data, 'How old are you?': age }));
  };

  const setRegion = (region: string) => {
    return setData(data => ({ ...data, 'Which region are you from?': region }));
  };

  const validateSexField = () => {
    if (isNull(sex)) {
      return 'Required';
    }

    return null;
  };

  const validateAgeField = () => {
    const LOWER_BOUND = 13;
    const UPPER_BOUND = 100;

    if (isNull(age)) {
      return 'Required';
    }

    if (age < LOWER_BOUND || age > UPPER_BOUND) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateRegionField = () => {
    if (isNull(region)) {
      return 'Required';
    }

    return null;
  };

  const sexFieldError = validateSexField();
  const ageFieldError = validateAgeField();
  const regionFieldError = validateRegionField();

  const isInvalidForm =
    Boolean(sexFieldError) ||
    Boolean(ageFieldError) ||
    Boolean(regionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">Specify your sex:</Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Male', 'Female']}
          value={sex}
          onChange={event => {
            const { value } = event.target;
            setSex(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">How old are you?</Heading>

        <FormField
          name="question-2"
          type="number"
          value={age || ''}
          onChange={event => {
            const { value } = event.target;
            setAge(value ? parseInt(value) : null);
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasAgeBeenBlurred: true,
            }));
          }}
        />

        <ErrorText visible={hasAgeBeenBlurred}>{ageFieldError}</ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4">Which region are you from?</Heading>

        <WorldMap
          name="question-3"
          fill="horizontal"
          continents={[
            {
              name: 'Africa',
              color: region === 'Africa' ? 'red' : 'grey',
              onClick: () => {
                setRegion('Africa');
              },
            },
            {
              name: 'Europe',
              color: region === 'Europe' ? 'red' : 'grey',
              onClick: () => {
                setRegion('Europe');
              },
            },
            {
              name: 'Asia',
              color: region === 'Asia' ? 'red' : 'grey',
              onClick: () => {
                setRegion('Asia');
              },
            },
            {
              name: 'North America',
              color: region === 'North America' ? 'red' : 'grey',
              onClick: () => {
                setRegion('North America');
              },
            },
            {
              name: 'South America',
              color: region === 'South America' ? 'red' : 'grey',
              onClick: () => {
                setRegion('South America');
              },
            },
            {
              name: 'Australia',
              color: region === 'Australia' ? 'red' : 'grey',
              onClick: () => {
                setRegion('Australia');
              },
            },
          ]}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/explanation/1');
          }}
        />
      </Box>
    </Form>
  );
};

export default Demographic;
