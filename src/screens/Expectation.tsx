import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../components';
import { useGlobalState } from '../hooks';

const Expectation: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasExpectationBeenBlurred: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const { 'What are you expecting from a digital group?': expectation } = data;
  const { hasExpectationBeenBlurred } = state;

  const setExpectation = (expectation: string) => {
    return setData(data => ({
      ...data,
      'What are you expecting from a digital group?': expectation,
    }));
  };

  const validateExpectationField = () => {
    if (!expectation) {
      return 'Required';
    }

    return null;
  };

  const definitionFieldError = validateExpectationField();
  const isInvalidForm = Boolean(definitionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          What are you expecting from a digital group?
        </Heading>

        <TextArea
          name="question-1"
          value={expectation || ''}
          onChange={event => {
            const { value } = event.target;
            setExpectation(value);
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasExpectationBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasExpectationBeenBlurred}
        >
          {definitionFieldError}
        </ErrorText>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/usage');
          }}
        />
      </Box>
    </Form>
  );
};

export default Expectation;
