import React from 'react';
import { Box, Paragraph, Button, Image, Text } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import * as KEYS from '../../hooks/keys';
import { isNull } from '../../utilities';
import { RadioButtonGroup, Heading } from '../../components';

const MissingMessageQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    [KEYS.FEEDBACK_MISSING_MSG_COHERENT]: coherentChoice,
    [KEYS.FEEDBACK_MISSING_MSG_HELPFUL]: helpfulChoice,
    [KEYS.FEEDBACK_MISSING_MSG_INTEGRATION]: integrationChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const options = ['0', '1', '2', '3', '4', '5'];

  const isInvalidForm = [coherentChoice, helpfulChoice, integrationChoice].some(
    isNull,
  );

  return (
    <>
      <Box margin="medium">
        <Heading level="3">Missing messages</Heading>

        <Image
          style={{
            width: 400,
            marginBottom: 8,
            alignSelf: 'center',
            border: '1px solid #ddd',
          }}
          src={require('../../assets/images/chat-2-i.png')}
          draggable={false}
          alt="Screenshot missing messages"
        />

        <Text
          margin={{ bottom: 'medium' }}
          alignSelf="center"
          size="small"
          color="grey"
        >
          Screenshot missing messages
        </Text>

        <Paragraph>
          Due to various circumstances, individual members in a group chat may
          not receive some messages. As a result, statements or answers can
          appear out of context. This new element should show the user that a
          message was not received.
        </Paragraph>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(coherentChoice)}>
          How comprehensible is the missing message element if you see it the
          first time?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          direction="row"
          scale={true}
          firstOptionLabel="Not at all"
          lastOptionLabel="Very"
          options={options}
          value={coherentChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_MISSING_MSG_COHERENT)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(helpfulChoice)}>
          How often could this element be helpful for you?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          direction="row"
          scale={true}
          firstOptionLabel="Never"
          lastOptionLabel="Often"
          options={options}
          value={helpfulChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_MISSING_MSG_HELPFUL)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(integrationChoice)}>
          Do you think this element should be integrated into your favorite chat
          messenger?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={
            {
              yes: 'Yes, it should be integrated',
              no: 'No',
            } as any
          }
          value={integrationChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_MISSING_MSG_INTEGRATION)(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/questions/inferred-quote');
          }}
        />
      </Box>
    </>
  );
};

export default MissingMessageQuestion;
