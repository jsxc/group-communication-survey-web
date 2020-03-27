import React, { useState } from 'react';
import { Box, Form, TextArea, Button, TextInput } from 'grommet';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinners/MoonLoader';
import axios from 'axios';
import { Heading, ErrorText } from '../components';
import { useGlobalState } from '../hooks';
import { match } from '../utilities';
import { uris, colors } from '../constants';

const Feedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasOpinionOnRepresentationsBeenBlurred: false,
    isFetching: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'What is your name?': name,
    'What do you think of the new representations?': opinionOnRepresentations,
  } = data;
  const { hasOpinionOnRepresentationsBeenBlurred, isFetching } = state;

  const setName = (name: string) => {
    return setData(data => ({
      ...data,
      'What is your name?': name,
    }));
  };

  const setOpinionOnRepresentations = (opinionOnRepresentations: string) => {
    return setData(data => ({
      ...data,
      'What do you think of the new representations?': opinionOnRepresentations,
    }));
  };

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
        <Heading level="4">What is your name?</Heading>

        <TextInput
          name="question-1"
          value={name || ''}
          placeholder="Your name (optional)"
          onChange={event => {
            const { value } = event.target;
            setName(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(opinionOnRepresentationsFieldError)}>
          What do you think of the new representations?
        </Heading>

        <TextArea
          name="question-2"
          value={opinionOnRepresentations || ''}
          onChange={event => {
            const { value } = event.target;
            setOpinionOnRepresentations(value);
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
        {isFetching ? null : (
          <Button
            type="submit"
            label="Done"
            disabled={isInvalidForm}
            onClick={async () => {
              try {
                const uri = match([
                  { if: 'development', then: uris.server.development },
                  { if: 'production', then: uris.server.production },
                ])(process.env.NODE_ENV);

                setState(state => ({ ...state, isFetching: true }));
                await axios.post(uri, data);
                setState(state => ({ ...state, isFetching: false }));

                browserHistory.push('/thank-you');
              } catch (error) {
                alert(
                  'An error has occurred. Please inform the survey conductor.',
                );
              }
            }}
          />
        )}

        <Spinner loading={isFetching} size={30} color={colors.PRIMARY} />
      </Box>
    </Form>
  );
};

export default Feedback;
