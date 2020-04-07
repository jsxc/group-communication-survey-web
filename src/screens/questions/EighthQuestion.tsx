import React, { useState } from 'react';
import { Box, Form, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, ErrorText } from '../../components';
import { useGlobalState } from '../../hooks';

const EighthQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasFirstQuestionBeenBlurred: false,
    hasSecondQuestionBeenBlurred: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Which visualization would you like to have integrated in your favorite chat app?': firstQuestionChoice,
    'Which feature are you missing in your favorite chat app?': secondQuestionChoice,
  } = data;
  const { hasFirstQuestionBeenBlurred, hasSecondQuestionBeenBlurred } = state;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const validateFirstQuestionField = () => {
    if (!firstQuestionChoice) {
      return 'Required';
    }

    return null;
  };

  const validateSecondQuestionField = () => {
    if (!secondQuestionChoice) {
      return 'Required';
    }

    return null;
  };

  const firstQuestionFieldError = validateFirstQuestionField();
  const secondQuestionFieldError = validateSecondQuestionField();

  const isInvalidForm = [
    firstQuestionFieldError,
    secondQuestionFieldError,
  ].some(Boolean);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={Boolean(firstQuestionFieldError)}>
          Which visualization would you like to have integrated in your favorite
          chat app?
        </Heading>

        <TextArea
          name="question-1"
          value={firstQuestionChoice || ''}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Which visualization would you like to have integrated in your favorite chat app?',
            )(value);
          }}
          onBlur={() => {
            setState((state) => ({
              ...state,
              hasFirstQuestionBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasFirstQuestionBeenBlurred}
        >
          {firstQuestionFieldError}
        </ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(secondQuestionFieldError)}>
          Which feature are you missing in your favorite chat app?
        </Heading>

        <TextArea
          name="question-2"
          value={secondQuestionChoice || ''}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Which feature are you missing in your favorite chat app?',
            )(value);
          }}
          onBlur={() => {
            setState((state) => ({
              ...state,
              hasSecondQuestionBeenBlurred: true,
            }));
          }}
        />

        <ErrorText
          margin={{ vertical: 'xsmall' }}
          visible={hasSecondQuestionBeenBlurred}
        >
          {secondQuestionFieldError}
        </ErrorText>
      </Box>

      <Box align="center" margin="large">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/explanations/2');
          }}
        />
      </Box>
    </Form>
  );
};

export default EighthQuestion;
