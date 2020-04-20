import React from 'react';
import { Box, Form, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import * as KEYS from '../../hooks/keys';
import { isNull } from '../../utilities';

const ThirdChatFeedback: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { thirdChatFeedback } = data;
  const {
    'How well did you understand the conversation?': firstQuestionChoice,
    [KEYS.FEEDBACK_TREE_CONTEXT]: contextChoice,
    [KEYS.FEEDBACK_TREE_COMPARISON]: comparisonChoice,
  } = thirdChatFeedback;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      thirdChatFeedback: {
        ...data.thirdChatFeedback,
        [question]: choice,
      },
    }));
  };

  const isInvalidForm = [
    firstQuestionChoice,
    contextChoice,
    comparisonChoice,
  ].some(isNull);

  return (
    <Form>
      <Heading level="3">Message tree</Heading>

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
        <Heading level="4" error={isNull(contextChoice)}>
          {KEYS.FEEDBACK_TREE_CONTEXT}
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={
            {
              yes: 'Yes, it is more clear',
              no: 'No, inferred quotes performed better',
              same: 'There was no difference',
            } as any
          }
          value={contextChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_TREE_CONTEXT)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(comparisonChoice)}>
          {KEYS.FEEDBACK_TREE_COMPARISON}
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={
            {
              inferred: 'Inferred quotes',
              tree: 'Message tree (this one)',
              none: 'None of those',
            } as any
          }
          value={comparisonChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_TREE_COMPARISON)(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/chats/4');
          }}
        />
      </Box>
    </Form>
  );
};

export default ThirdChatFeedback;
