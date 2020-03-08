import React from 'react';
import { Box, Form, Heading, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import { constructRadioOptions } from '../chats-feedback/utilities';
import { isNull, any } from '../../utilities';

const SeventhQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Do you expect that everyone reads your message in a group chat?': firstQuestionChoice,
    'Do you thing everyone is reading all your messages in a group chat?': secondQuestionChoice,
    'Are you always reading all messages in a group chat?': thirdQuestionChoice,
    'Would you publish all your conversations in your favorite group chat app?': fourthQuestionChoice,
    'Would you publish a complete list of groups you are part of in your favorite group chat app?': fifthQuestionChoice,
    'How do you react if a new member joins a group of good friends/business group/club group?': sixthQuestionChoice,
    "What is your most common reaction if a new member, which you don't like, is added to a group?": seventhQuestionChoice,
    "What is your most common reaction if you are added to a group which you don't like to be part of?": eighthQuestionChoice,
    'How often does this happen?': ninthQuestionChoice,
    "What are you doing if you don't want to participate in a digital group?": tenthQuestionChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData(data => ({
      ...data,
      [question]: choice,
    }));
  };

  const isInvalidForm = any(isNull)([
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
  ]);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          Do you expect that everyone reads your message in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No'].map(constructRadioOptions)}
          value={firstQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you expect that everyone reads your message in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Do you thing everyone is reading all your messages in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={['Yes', 'No'].map(constructRadioOptions)}
          value={secondQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you thing everyone is reading all your messages in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Are you always reading all messages in a group chat?
        </Heading>

        <RadioButtonGroup
          name="question-3"
          options={['Yes', 'No'].map(constructRadioOptions)}
          value={thirdQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Are you always reading all messages in a group chat?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Would you publish all your conversations in your favorite group chat
          app?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          options={['Yes', 'No'].map(constructRadioOptions)}
          value={fourthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Would you publish all your conversations in your favorite group chat app?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Would you publish a complete list of groups you are part of in your
          favorite group chat app?
        </Heading>

        <RadioButtonGroup
          name="question-5"
          options={['Yes', 'No'].map(constructRadioOptions)}
          value={fifthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Would you publish a complete list of groups you are part of in your favorite group chat app?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          How do you react if a new member joins a group of good
          friends/business group/club group?
        </Heading>

        <RadioButtonGroup
          name="question-6"
          options={[
            'I aknowledge it',
            'I ask the new group why the new member joined',
            'I ask the previous members why the new member joined',
            'I ask the new member why he joined',
            'I leave the group',
          ].map(constructRadioOptions)}
          value={sixthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'How do you react if a new member joins a group of good friends/business group/club group?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          What is your most common reaction if a new member, which you don't
          like, is added to a group?
        </Heading>

        <RadioButtonGroup
          name="question-7"
          options={[
            'I leave the group',
            'I try to get along with him',
            'I start a new group with a subset of the previous group',
          ].map(constructRadioOptions)}
          value={seventhQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              "What is your most common reaction if a new member, which you don't like, is added to a group?",
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          What is your most common reaction if you are added to a group which
          you don't like to be part of?
        </Heading>

        <RadioButtonGroup
          name="question-8"
          options={[
            'I leave it',
            'I ignore it',
            'I mute it',
            'I spam in the group until they kick me out',
          ].map(constructRadioOptions)}
          value={eighthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              "What is your most common reaction if you are added to a group which you don't like to be part of?",
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">How often does this happen?</Heading>

        <RadioButtonGroup
          name="question-9"
          options={[
            'Once a day',
            'Several times a day',
            'Once a week',
            'Several times a week',
            'Once a month',
            'Nearly never',
          ].map(constructRadioOptions)}
          value={ninthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('How often does this happen?')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          What are you doing if you don't want to participate in a digital
          group?
        </Heading>

        <RadioButtonGroup
          name="question-10"
          options={[
            'I leave the group',
            'I ignore the group',
            'I mute the group',
          ].map(constructRadioOptions)}
          value={tenthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              "What are you doing if you don't want to participate in a digital group?",
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
