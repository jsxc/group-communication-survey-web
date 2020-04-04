import React from 'react';
import { Box, Form, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const FirstChatFeedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { firstChatFeedback } = data;
  const {
    'How well did you understand the conversation?': firstQuestionChoice,
    'Did you notice something?': secondQuestionChoice,
  } = firstChatFeedback;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      firstChatFeedback: {
        ...data.firstChatFeedback,
        [question]: choice,
      },
    }));
  };

  const validateRadioFieldChoice = (question: string) => {
    const choice = firstChatFeedback[question];

    if (isNull(choice)) {
      return 'Required';
    }

    return null;
  };

  const validateTextField = (question: string) => {
    const choice = firstChatFeedback[question];

    if (!choice) {
      return 'Required';
    }

    return null;
  };

  const firstQuestionOptions = ['0', '1', '2', '3', '4', '5'];

  const firstQuestionChoiceError = validateRadioFieldChoice(
    'How well did you understand the conversation?',
  );
  const secondQuestionChoiceError = validateTextField(
    'Did you notice something?',
  );

  const isInvalidForm =
    Boolean(firstQuestionChoiceError) || Boolean(secondQuestionChoiceError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={Boolean(firstQuestionChoiceError)}>
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
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('How well did you understand the conversation?')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(secondQuestionChoiceError)}>
          Did you notice something?
        </Heading>

        <TextArea
          name="question-2"
          value={secondQuestionChoice || ''}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('Did you notice something?')(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/chats/2');
          }}
        />
      </Box>
    </Form>
  );
};

export default FirstChatFeedback;
