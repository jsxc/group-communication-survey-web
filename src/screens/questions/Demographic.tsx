import React, { useState } from 'react';
import {
  Box,
  Form,
  Heading,
  FormField,
  Button,
  RadioButtonGroup,
} from 'grommet';
import { useHistory } from 'react-router-dom';
import { isNil } from '../../utilities';

const Demographic: React.FC = () => {
  const [state, setState] = useState({
    age: null,
    usesGroupChatClient: null,
    hasAgeBeenBlurred: false,
  });

  const browserHistory = useHistory();

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

  const { age, usesGroupChatClient, hasAgeBeenBlurred } = state;

  const ageFieldError = validateAgeField();
  const isInvalidForm = Boolean(ageFieldError);

  return (
    <Form>
      <Box>
        <Heading level="4">Wie alt bist du?</Heading>

        <FormField
          type="number"
          name="question-1"
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

      <Box>
        <Heading level="4">
          Nutzt du einen gruppenfähigen Chat Client wie zum Beispiel WhatsApp?
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={['Ja', 'Nein']}
          value={usesGroupChatClient ? 'Ja' : 'Nein'}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              usesGroupChatClient: value === 'Ja',
            }));
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Weiter"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/thank-you');
          }}
        />
      </Box>
    </Form>
  );
};

export default Demographic;
