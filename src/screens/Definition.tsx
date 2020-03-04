import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../components';
import { useGlobalState } from '../hooks';

const Definition: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'What do you think are properties that define group communication?': definition,
  } = data;

  const setDefinition = (definition: string) => {
    return setData(data => ({
      ...data,
      'What do you think are properties that define group communication?': definition,
    }));
  };

  const [state, setState] = useState({
    hasDefinitionBeenBlurred: false,
  });

  const { hasDefinitionBeenBlurred } = state;

  const browserHistory = useHistory();

  const validateDefinitionField = () => {
    if (!definition) {
      return 'Required';
    }

    return null;
  };

  const definitionFieldError = validateDefinitionField();
  const isInvalidForm = Boolean(definitionFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          What do you think are properties that define group communication?
        </Heading>

        <TextArea
          name="question-1"
          value={definition || ''}
          onChange={event => {
            const { value } = event.target;
            setDefinition(value);
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
