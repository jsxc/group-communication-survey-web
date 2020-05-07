import React from 'react';
import { Box, Form, Button, Paragraph } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const SeventhQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Do you expect that everyone reads your message in a group chat?': firstQuestionChoice,
    'Do you think everyone is reading all your messages in a group chat?': secondQuestionChoice,
    'Are you always reading all messages in a group chat?': thirdQuestionChoice,
    'Would you publish all your conversations in your favorite group chat app?': fourthQuestionChoice,
    'Would you publish a complete list of groups you are part of in your favorite group chat app?': fifthQuestionChoice,
    'How do you react if a new member joins a group of good friends/business group/club group?': sixthQuestionChoice,
    "What is your most common reaction if a new member, which you don't like, is added to a group?": seventhQuestionChoice,
    "What is your most common reaction if you are added to a group which you don't like to be part of?": eighthQuestionChoice,
    'How often does this happen?': ninthQuestionChoice,
    "What are you doing if you don't want to participate in a digital group?": tenthQuestionChoice,
    'If I want to leave a group in my favorite chat app, I will always give a reason': fourteenthQuestionChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const isInvalidForm = [
    firstQuestionChoice,
    secondQuestionChoice,
    thirdQuestionChoice,
    fourthQuestionChoice,
    fifthQuestionChoice,
    sixthQuestionChoice,
    seventhQuestionChoice,
    eighthQuestionChoice,
    ninthQuestionChoice,
    tenthQuestionChoice,
  ].some(isNull);

  return (
    <Form>
      <Box margin="medium">
        <Paragraph>
          Remember: The following questions are related to{' '}
          <strong>digital groups</strong> also known as group chats.
        </Paragraph>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(firstQuestionChoice)}>
          Do you expect that everyone reads your message in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={firstQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you expect that everyone reads your message in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(secondQuestionChoice)}>
          Do you think everyone is reading all your messages in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={['Yes', 'No']}
          value={secondQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you think everyone is reading all your messages in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(thirdQuestionChoice)}>
          Are you always reading all messages in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-3"
          options={['Yes', 'No']}
          value={thirdQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Are you always reading all messages in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fourthQuestionChoice)}>
          Would you publish all your conversations in your favorite group chat
          app?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          options={['Yes', 'No']}
          value={fourthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Would you publish all your conversations in your favorite group chat app?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fifthQuestionChoice)}>
          Would you publish a complete list of groups you are part of in your
          favorite group chat app?
        </Heading>

        <RadioButtonGroup
          name="question-5"
          options={['Yes', 'No']}
          value={fifthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Would you publish a complete list of groups you are part of in your favorite group chat app?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(sixthQuestionChoice)}>
          How do you react if a new member joins a group of good
          friends/business group/club group?
        </Heading>

        <RadioButtonGroup
          name="question-6"
          other={true}
          options={[
            'I aknowledge it',
            'I ask the new group why the new member joined',
            'I ask the previous members why the new member joined',
            'I ask the new member why he joined',
            'I leave the group',
          ]}
          value={sixthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'How do you react if a new member joins a group of good friends/business group/club group?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(seventhQuestionChoice)}>
          What is your most common reaction if a new member, whom you don't
          like, is added to a group?
        </Heading>

        <RadioButtonGroup
          name="question-7"
          other={true}
          options={[
            'I leave the group',
            'I try to get along with him',
            'I start a new group with a subset of the previous group',
          ]}
          value={seventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              "What is your most common reaction if a new member, which you don't like, is added to a group?",
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(eighthQuestionChoice)}>
          What is your most common reaction if you are added to a group which
          you don't like to be part of?
        </Heading>

        <RadioButtonGroup
          name="question-8"
          other={true}
          options={[
            'I leave it',
            'I ignore it',
            'I mute it',
            'I spam in the group until they kick me out',
          ]}
          value={eighthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              "What is your most common reaction if you are added to a group which you don't like to be part of?",
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(ninthQuestionChoice)}>
          How often does this happen?
        </Heading>

        <RadioButtonGroup
          name="question-9"
          other={true}
          options={[
            'Once a day',
            'Several times a day',
            'Once a week',
            'Several times a week',
            'Once a month',
            'Nearly never',
          ]}
          value={ninthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('How often does this happen?')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(tenthQuestionChoice)}>
          What do you do if you don't want to participate in a digital group?
        </Heading>

        <RadioButtonGroup
          name="question-10"
          other={true}
          options={[
            'I leave the group',
            'I ignore the group',
            'I mute the group',
          ]}
          value={tenthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              "What are you doing if you don't want to participate in a digital group?",
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fourteenthQuestionChoice)}>
          How far do you agree: If I want to leave a group in my favorite chat
          app, I will always give a reason.
        </Heading>

        <RadioButtonGroup
          name="question-14"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={['0', '1', '2', '3', '4', '5']}
          value={fourteenthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'If I want to leave a group in my favorite chat app, I will always give a reason',
            )(value);
          }}
        />
      </Box>

      <Box align="center" margin="large">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/questions/8');
          }}
        />
      </Box>
    </Form>
  );
};

export default SeventhQuestion;
