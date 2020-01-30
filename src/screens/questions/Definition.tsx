import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../../components';

const Definition: React.FC = () => {
  const [state, setState] = useState({
    definition: '',
    hasDefinitionBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const validateDefinitionField = () => {
    const { definition } = state;

    if (!definition) {
      return 'Required';
    }

    return null;
  };

  const { definition, hasDefinitionBeenBlurred } = state;

  const definitionFieldError = validateDefinitionField();
  const isInvalidForm = Boolean(definitionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          What do you think are properties that define group communication?
        </Heading>

        <TextArea
          value={definition}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              definition: value,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasDefinitionBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasDefinitionBeenBlurred}
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
            browserHistory.push('/expectation');
          }}
        />
      </Box>
    </Form>
  );
};

export default Definition;
