import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../../components';

const DisuseExplanation: React.FC = () => {
  const [state, setState] = useState({
    disuseExplanation: '',
    hasDisuseExplanationBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const validateDisuseExplanationField = () => {
    const { disuseExplanation } = state;

    if (!disuseExplanation) {
      return 'Required';
    }

    return null;
  };

  const { disuseExplanation, hasDisuseExplanationBeenBlurred } = state;

  const disuseExplanationFieldError = validateDisuseExplanationField();
  const isInvalidForm = Boolean(disuseExplanationFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">Why don't you use any group chat client?</Heading>

        <TextArea
          value={disuseExplanation}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              disuseExplanation: value,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasDisuseExplanationBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasDisuseExplanationBeenBlurred}
        >
          {disuseExplanationFieldError}
        </ErrorText>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/thank-you');
          }}
        />
      </Box>
    </Form>
  );
};

export default DisuseExplanation;
