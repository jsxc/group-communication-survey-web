import React, { useState } from 'react';
import { Box, Form, Heading, TextArea, Button, TextInput } from 'grommet';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ErrorText } from '../components';
import { useGlobalState } from '../hooks';
import { urls } from '../constants';

const Feedback: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { name, opinionOnRepresentations } = data;

  const [state, setState] = useState({
    hasOpinionOnRepresentationsBeenBlurred: false,
  });

  const { hasOpinionOnRepresentationsBeenBlurred } = state;

  const browserHistory = useHistory();

  const validateOpinionOnRepresentationsField = () => {
    if (!opinionOnRepresentations) {
      return 'Required';
    }

    return null;
  };

  const opinionOnRepresentationsFieldError = validateOpinionOnRepresentationsField();
  const isInvalidForm = Boolean(opinionOnRepresentationsFieldError);

  return (
    <Form>
      <Heading level="3">Almost there. Only the following questions.</Heading>

      <Box margin="medium">
        <Heading level="4">
          If you would like, you could tell me your name here so that I may ask
          you follow-up questions.
        </Heading>

        <TextInput
          name="question-1"
          value={name || ''}
          placeholder="Your name (optional)"
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
              name: value,
            }));
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          What do you think of the new representations?
        </Heading>

        <TextArea
          name="question-2"
          value={opinionOnRepresentations || ''}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
              opinionOnRepresentations: value,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasOpinionOnRepresentationsBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasOpinionOnRepresentationsBeenBlurred}
        >
          {opinionOnRepresentationsFieldError}
        </ErrorText>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Done"
          disabled={isInvalidForm}
          onClick={async () => {
            try {
              await axios.post(urls.server.endpoints.surveyResult, data);

              browserHistory.push('/thank-you');
            } catch (error) {
              alert(
                'An error has occurred. Please inform the survey conductor.',
              );
            }
          }}
        />
      </Box>
    </Form>
  );
};

export default Feedback;
