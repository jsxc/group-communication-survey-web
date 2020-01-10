import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../../components';
import { getNextPathname } from '../../utilities';

const Expectation: React.FC = () => {
  const [state, setState] = useState({
    expectation: '',
    hasExpectationBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const {
    location: { pathname },
  } = browserHistory;

  const validateExpectationField = () => {
    const { expectation } = state;

    if (!expectation) {
      return 'Required';
    }

    return null;
  };

  const { expectation, hasExpectationBeenBlurred } = state;

  const definitionFieldError = validateExpectationField();
  const isInvalidForm = Boolean(definitionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          What are you expecting from a digital group?
        </Heading>

        <TextArea
          value={expectation}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              expectation: value,
            }));
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
            browserHistory.push(getNextPathname(pathname));
          }}
        />
      </Box>
    </Form>
  );
};

export default Expectation;
