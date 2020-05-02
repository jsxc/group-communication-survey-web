import React from 'react';
import { Box, Paragraph, Button, Image, Text } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import * as KEYS from '../../hooks/keys';
import { isNull } from '../../utilities';
import { RadioButtonGroup, Heading } from '../../components';

const InferredQuoteQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    [KEYS.FEEDBACK_INFERRED_QUOTE_FINE]: fineChoice,
    [KEYS.FEEDBACK_INFERRED_QUOTE_FINE2]: fine2Choice,
    [KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT]: coherentChoice,
    [KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL]: helpfulChoice,
    [KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION]: integrationChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const options = ['0', '1', '2', '3', '4', '5'];

  const isInvalidForm = [
    fineChoice,
    fine2Choice,
    coherentChoice,
    helpfulChoice,
    integrationChoice,
  ].some(isNull);

  return (
    <>
      <Box margin="medium">
        <Heading level="3">Inferred quote</Heading>

        <Image
          style={{
            width: 400,
            marginBottom: 8,
            alignSelf: 'center',
            border: '1px solid #ddd',
          }}
          src={require('../../assets/images/chat-2-ii.png')}
          draggable={false}
          alt="Screenshot inferred quote"
        />

        <Text
          margin={{ bottom: 'medium' }}
          alignSelf="center"
          size="small"
          color="grey"
        >
          Screenshot inferred quote
        </Text>

        <Paragraph>
          Not only can missing messages lead to misunderstandings, but also
          messages outside the context in which they were sent. For example,
          let's say you don't have Internet access and still send a message.
          Since you are offline, this message will only be sent when you are
          online again. During this time, the conversation in the group could
          already be on a completely different topic.
          <br />
          This element should show you the context in which the message was
          sent.
        </Paragraph>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fineChoice)}>
          If you read the chat in correct order you know that Doris is fine. Was
          this obvious to you on the first chat (without any special elements)?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={fineChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_INFERRED_QUOTE_FINE)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fine2Choice)}>
          Was it obvious to you with the inferred quotes that Doris is fine?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={fine2Choice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(KEYS.FEEDBACK_INFERRED_QUOTE_FINE2)(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(coherentChoice)}>
          How comprehensible is the inferred quote if you see it the first time?
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
            setQuestionChoice(KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT)(value);
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
            setQuestionChoice(KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL)(value);
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
            setQuestionChoice(KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION)(value);
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
    </>
  );
};

export default InferredQuoteQuestion;
