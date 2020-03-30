import React from 'react';
import { Box, Form, TextArea, Button, Image } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
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
    'Could you explain the purpose of the added chat elements?': secondQuestionChoice,
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

  const validateTextField = (question: string) => {
    const choice = secondChatFeedback[question];

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
    'Could you explain the purpose of the added chat elements?',
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
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('How well did you understand the conversation?')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(secondQuestionChoiceError)}>
          Could you explain the purpose of the added chat elements?
        </Heading>

        <Image
          style={{ width: 400, marginBottom: 24, alignSelf: 'center' }}
          src={require('../../assets/images/chat-2.png')}
          alt="Chat screenshot"
        />

        <TextArea
          name="question-2"
          value={secondQuestionChoice || ''}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Could you explain the purpose of the added chat elements?',
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
