import React from 'react';
import { Box, Form, Button, Image, Text } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import * as KEYS from '../../hooks/keys';
import { isNull } from '../../utilities';

const FourthChatFeedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { fourthChatFeedback } = data;
  const {
    'How well did you understand the conversation?': firstQuestionChoice,
    [KEYS.FEEDBACK_TAB_CONTEXT_INFERRED]: contextInferredChoice,
    [KEYS.FEEDBACK_TAB_CONTEXT_TREE]: contextTreeChoice,
    [KEYS.FEEDBACK_TAB_COMPARISON]: comparisonChoice,
  } = fourthChatFeedback;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      fourthChatFeedback: {
        ...data.fourthChatFeedback,
        [question]: choice,
      },
    }));
  };

  const isInvalidForm = [
    firstQuestionChoice,
    contextInferredChoice,
    contextTreeChoice,
    comparisonChoice,
  ].some(isNull);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="3">Message tabs</Heading>
        <Image
          style={{
            width: 400,
            marginBottom: 8,
            alignSelf: 'center',
            border: '1px solid #ddd',
          }}
          src={require('../../assets/images/chat-tabs.png')}
          draggable={false}
          alt="Chat tree screenshot"
        />
        <Text
          margin={{ bottom: 'medium' }}
          alignSelf="center"
          size="small"
          color="grey"
        >
          Screenshot of a message tab.
        </Text>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(firstQuestionChoice)}>
          How well did you understand the conversation?
        </Heading>

        <RadioButtonGroup
          direction="row"
          name="question-1"
          scale={true}
          firstOptionLabel="Very badly"
          lastOptionLabel="Very well"
          options={[0, 1, 2, 3, 4, 5].map((i) => i.toString())}
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
        <Heading level="4" error={isNull(contextInferredChoice)}>
          {KEYS.FEEDBACK_TAB_CONTEXT_INFERRED}
        </Heading>

        <Image
          style={{
            width: 400,
            marginBottom: 8,
            alignSelf: 'center',
            border: '1px solid #ddd',
          }}
          src={require('../../assets/images/chat-2-ii.png')}
          draggable={false}
          alt="Chat screenshot 2"
        />

        <Text
          margin={{ bottom: 'medium' }}
          alignSelf="center"
          size="small"
          color="grey"
        >
          Screenshot inferred quote
        </Text>

        <RadioButtonGroup
          name="question-2"
          options={
            {
              yes: 'Yes, it is more clear',
              no: 'No, inferred quotes performed better',
              same: 'There was no difference',
            } as any
          }
          value={contextInferredChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_TAB_CONTEXT_INFERRED)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(contextTreeChoice)}>
          {KEYS.FEEDBACK_TAB_CONTEXT_TREE}
        </Heading>

        <Image
          style={{
            width: 400,
            marginBottom: 8,
            alignSelf: 'center',
            border: '1px solid #ddd',
          }}
          src={require('../../assets/images/chat-tree.png')}
          draggable={false}
          alt="Chat screenshot 2"
        />

        <Text
          margin={{ bottom: 'medium' }}
          alignSelf="center"
          size="small"
          color="grey"
        >
          Screenshot message tree
        </Text>

        <RadioButtonGroup
          name="question-2"
          options={
            {
              yes: 'Yes, it is more clear',
              no: 'No, the message tree performed better',
              same: 'There was no difference',
            } as any
          }
          value={contextTreeChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_TAB_CONTEXT_TREE)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(comparisonChoice)}>
          {KEYS.FEEDBACK_TAB_COMPARISON}
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={
            {
              inferred: 'Inferred quotes',
              tree: 'Message tree',
              tab: 'Message tab (this one)',
              none: 'None of those',
            } as any
          }
          value={comparisonChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_TAB_COMPARISON)(value);
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

export default FourthChatFeedback;
