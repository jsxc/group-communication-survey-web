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
import { getNextPathname, isNil } from '../../utilities';

const Demographic: React.FC = () => {
  const [state, setState] = useState({
    isMale: true,
    age: null,
    region: null,
    hasAgeBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const {
    location: { pathname },
  } = browserHistory;

  const validateAgeField = () => {
    const { age } = state;

    const LOWER_AGE_BOUND = 13;
    const UPPER_AGE_BOUND = 100;

    if (isNil(age)) {
      return 'Required';
    }

    if (age < LOWER_AGE_BOUND || age > UPPER_AGE_BOUND) {
      return `Age must be between ${LOWER_AGE_BOUND} and ${UPPER_AGE_BOUND}`;
    }

    return null;
  };

  const validateRegionField = () => {
    const { region } = state;

    if (isNil(region)) {
      return 'Required';
    }

    return null;
  };

  const { isMale, age, hasAgeBeenBlurred } = state;

  const ageFieldError = validateAgeField();
  const regionFieldError = validateRegionField();

  const isInvalidForm = Boolean(ageFieldError) || Boolean(regionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">Specify your sex:</Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Male', 'Female']}
          value={isMale ? 'Male' : 'Female'}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              isMale: value === 'Male',
            }));
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">How old are you?</Heading>

        <FormField
          type="number"
          name="question-2"
          value={age || ''}
          error={hasAgeBeenBlurred ? ageFieldError : null}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              age: value ? parseInt(value) : null,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasAgeBeenBlurred: true,
            }));
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">Which region are you from?</Heading>

        <WorldMap
          fill="horizontal"
          continents={[
            {
              name: 'Africa',
              color: 'red',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Africa',
                });
              },
            },
            {
              name: 'Europe',
              color: 'blue',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Europe',
                });
              },
            },
            {
              name: 'Asia',
              color: 'chocolate',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Asia',
                });
              },
            },
            {
              name: 'North America',
              color: 'darkmagenta',
              onClick: () => {
                setState({
                  ...state,
                  region: 'North America',
                });
              },
            },
            {
              name: 'South America',
              color: 'orange',
              onClick: () => {
                setState({
                  ...state,
                  region: 'South America',
                });
              },
            },
            {
              name: 'Australia',
              color: 'green',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Australia',
                });
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
            browserHistory.push(getNextPathname(pathname));
          }}
        />
      </Box>
    </Form>
  );
};

export default Demographic;
