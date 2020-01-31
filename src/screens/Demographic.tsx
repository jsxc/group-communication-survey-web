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

const Demographic: React.FC = () => {
  const [state, setState] = useState({
    isMale: true,
    age: 0,
    region: '',
    hasAgeBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const validateAgeField = () => {
    const { age } = state;

    const LOWER_BOUND = 13;
    const UPPER_BOUND = 100;

    if (!age) {
      return 'Required';
    }

    if (age < LOWER_BOUND || age > UPPER_BOUND) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateRegionField = () => {
    const { region } = state;

    if (!region) {
      return 'Required';
    }

    return null;
  };

  const { isMale, age, region, hasAgeBeenBlurred } = state;

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
          value={age || ''}
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

        <ErrorText visible={hasAgeBeenBlurred}>{ageFieldError}</ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4">Which region are you from?</Heading>

        <WorldMap
          fill="horizontal"
          continents={[
            {
              name: 'Africa',
              color: region === 'Africa' ? 'red' : 'grey',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Africa',
                });
              },
            },
            {
              name: 'Europe',
              color: region === 'Europe' ? 'red' : 'grey',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Europe',
                });
              },
            },
            {
              name: 'Asia',
              color: region === 'Asia' ? 'red' : 'grey',
              onClick: () => {
                setState({
                  ...state,
                  region: 'Asia',
                });
              },
            },
            {
              name: 'North America',
              color: region === 'North America' ? 'red' : 'grey',
              onClick: () => {
                setState({
                  ...state,
                  region: 'North America',
                });
              },
            },
            {
              name: 'South America',
              color: region === 'South America' ? 'red' : 'grey',
              onClick: () => {
                setState({
                  ...state,
                  region: 'South America',
                });
              },
            },
            {
              name: 'Australia',
              color: region === 'Australia' ? 'red' : 'grey',
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
            browserHistory.push('/definition');
          }}
        />
      </Box>
    </Form>
  );
};

export default Demographic;
