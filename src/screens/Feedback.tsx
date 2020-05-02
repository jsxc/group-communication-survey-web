import React, { useState, useEffect } from 'react';
import { Box, Form, TextArea, Button, TextInput, Paragraph } from 'grommet';
import { useHistory } from 'react-router-dom';
import Spinner from 'react-spinners/MoonLoader';
import axios from 'axios';
import { Heading, ErrorText } from '../components';
import { useGlobalState, KEYS } from '../hooks';
import { match } from '../utilities';
import { uris, colors } from '../constants';

const Feedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasOpinionMissingBeenBlurred: false,
    isFetching: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'What is your email address?': email,
    'Is there a feature or visualisation which you miss in your favorite chat app?': opinionMissing,
  } = data;
  const { hasOpinionMissingBeenBlurred, isFetching } = state;

  const setEmail = (email: string) => {
    return setData((data) => ({
      ...data,
      'What is your email address?': email,
    }));
  };

  const setOpinionMissing = (opinionMissing: string) => {
    return setData((data) => ({
      ...data,
      'Is there a feature or visualisation which you miss in your favorite chat app?': opinionMissing,
    }));
  };

  const validateOpinionMissingField = () => {
    if (!opinionMissing) {
      return 'Required';
    }

    return null;
  };

  useEffect(() => {
    if (!data[KEYS.STAT_END]) {
      setData((data) => ({
        ...data,
        [KEYS.STAT_END]: new Date(),
      }));
    }
  });

  const opinionMissingFieldError = validateOpinionMissingField();

  const isInvalidForm = [opinionMissingFieldError].some(Boolean);

  return (
    <Form>
      <Heading level="3">Almost there. Only the following questions.</Heading>

      <Box margin="medium">
        <Heading level="4">What is your email address?</Heading>
        <Paragraph>
          We will send you only one message with the preliminary results and
          information about a possible subsequent questionary.
        </Paragraph>

        <TextInput
          name="question-1"
          value={email || ''}
          placeholder="Your email address (optional)"
          onChange={(event) => {
            const { value } = event.target;
            setEmail(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(opinionMissingFieldError)}>
          Is there anything you want to say the author of this survey?
        </Heading>

        <TextArea
          name="question-2"
          value={opinionMissing || ''}
          onChange={(event) => {
            const { value } = event.target;
            setOpinionMissing(value);
          }}
          onBlur={() => {
            setState((state) => ({
              ...state,
              hasOpinionMissingBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasOpinionMissingBeenBlurred}
        >
          {opinionMissingFieldError}
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

                setState((state) => ({ ...state, isFetching: true }));
                await axios.post(uri, data);
                setState((state) => ({ ...state, isFetching: false }));

                browserHistory.push('/thank-you');
              } catch (error) {
                setState((state) => ({ ...state, isFetching: false }));

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
