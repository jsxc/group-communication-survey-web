import React from 'react';
import { Box, Form, Heading, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const FifthChatFeedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { fifthChatFeedback } = data;
  const {
    'How well did you understand the conversation?': firstQuestionChoice,
    'How many people reported sick?': secondQuestionChoice,
    'Is the day going smoothly?': thirdQuestionChoice,
  } = fifthChatFeedback;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData(data => ({
      ...data,
      fifthChatFeedback: {
        ...data.fifthChatFeedback,
        [question]: choice,
      },
    }));
  };

  const validateRadioFieldChoice = (question: string) => {
    const choice = fifthChatFeedback[question];

    if (isNull(choice)) {
      return 'Required';
    }

    return null;
  };

  const firstQuestionOptions = ['0', '1', '2', '3', '4', '5'];

  const secondQuestionOptions = ['0', '1', '2', '3'];

  const thirdQuestionOptions = [
    'Yes',
    'No',
    'This was not mentioned in the conversation',
    'There were contradicting statements',
    'There was too little information about this',
  ];

  const firstQuestionChoiceError = validateRadioFieldChoice(
    'How well did you understand the conversation?',
  );
  const secondQuestionChoiceError = validateRadioFieldChoice(
    'How many people reported sick?',
  );
  const thirdQuestionChoiceError = validateRadioFieldChoice(
    'Is the day going smoothly?',
  );

  const isInvalidForm =
    Boolean(firstQuestionChoiceError) ||
    Boolean(secondQuestionChoiceError) ||
    Boolean(thirdQuestionChoiceError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          How well did you understand the conversation?
        </Heading>

        <RadioButtonGroup
          direction="row"
          name="question-1"
          scale={true}
          firstOptionLabel="Very badly"
          lastOptionLabel="Very well"
          options={firstQuestionOptions}
          value={firstQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('How well did you understand the conversation?')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">How many people reported sick?</Heading>

        <RadioButtonGroup
          name="question-2"
          options={secondQuestionOptions}
          value={secondQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('How many people reported sick?')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">Is the day going smoothly?</Heading>

        <RadioButtonGroup
          name="question-3"
          options={thirdQuestionOptions}
          value={thirdQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('Is the day going smoothly?')(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/feedback');
          }}
        />
      </Box>
    </Form>
  );
};

export default FifthChatFeedback;
