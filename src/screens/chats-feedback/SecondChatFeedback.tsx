import React from 'react';
import { Box, Form, Heading, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const SecondChatFeedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { secondChatFeedback } = data;
  const {
    'How well did you understand the conversation?': firstQuestionChoice,
    'Is Arthur alright?': secondQuestionChoice,
    'Does Arthur know the other driver involved in the accident?': thirdQuestionChoice,
  } = secondChatFeedback;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData(data => ({
      ...data,
      secondChatFeedback: {
        ...data.secondChatFeedback,
        [question]: choice,
      },
    }));
  };

  const validateRadioFieldChoice = (question: string) => {
    const choice = secondChatFeedback[question];

    if (isNull(choice)) {
      return 'Required';
    }

    return null;
  };

  const firstQuestionOptions = ['0', '1', '2', '3', '4', '5'];

  const secondQuestionOptions = [
    'Yes',
    'No',
    'This was not mentioned in the conversation',
    'There were contradicting statements',
    'There was too little information about this',
  ];

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
    'Is Arthur alright?',
  );
  const thirdQuestionChoiceError = validateRadioFieldChoice(
    'Does Arthur know the other driver involved in the accident?',
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
        <Heading level="4">Is Arthur alright?</Heading>

        <RadioButtonGroup
          name="question-2"
          options={secondQuestionOptions}
          value={secondQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('Is Arthur alright?')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Does Arthur know the other driver involved in the accident?
        </Heading>

        <RadioButtonGroup
          name="question-3"
          options={thirdQuestionOptions}
          value={thirdQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Does Arthur know the other driver involved in the accident?',
            )(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/chats/3');
          }}
        />
      </Box>
    </Form>
  );
};

export default SecondChatFeedback;
