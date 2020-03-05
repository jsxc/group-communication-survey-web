import React from 'react';
import { Box, Form, Heading, Text, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import { constructRadioOptions } from '../chats-feedback/utilities';
import { isNull, any } from '../../utilities';

const FirstQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Even if I am not allowed to talk, I always have the possibility to do so': firstQuestionChoice,
    'I am always able to hear everyone speaking': secondQuestionChoice,
    'I am always attentive during a discussion': thirdQuestionChoice,
    'I always understand every statement acousticly and contentually': fourthQuestionChoice,
    'I am never distracted during a discussion': fifthQuestionChoice,
    'I always know who is talking': sixthQuestionChoice,
    'I always know the person who is speaking': seventhQuestionChoice,
    'I always know every participant in a group': eighthQuestionChoice,
    'If there are no tapping devices a single member can not prove that someone said something': ninthQuestionChoice,
    'If there are no tapping devices a single member can not prove that someone was a member of a specific group': tenthQuestionChoice,
    'It is sometimes important that no member in a group can prove that someone said something': eleventhQuestionChoice,
    'Confidential private topics are only discussed in small groups': twelfthQuestionChoice,
    'I always leave a group with an announcement': thirteenthQuestionChoice,
    'If I want to leave a group in my favorite chat app, I will always give a reason': fourteenthQuestionChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData(data => ({
      ...data,
      [question]: choice,
    }));
  };

  const options = ['0', '1', '2', '3', '4'];

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
    eleventhQuestionChoice,
    twelfthQuestionChoice,
    thirteenthQuestionChoice,
    fourteenthQuestionChoice,
  ]);

  return (
    <Form>
      <Box margin="medium">
        <Heading style={{ marginBottom: 0 }} level="4">
          How far do you agree with the following statements?
        </Heading>

        <Text style={{ fontStyle: 'italic' }} size="small">
          [0=Disagree, 4=Agree]
        </Text>
      </Box>

      <Box margin="medium">
        <Heading level="5">
          Even if I'm not allowed to talk, I always have the possibility to do
          so.
        </Heading>

        <RadioButtonGroup
          name="question-1"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={firstQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Even if I am not allowed to talk, I always have the possibility to do so',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I am always able to hear everyone speaking.</Heading>

        <RadioButtonGroup
          name="question-2"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={secondQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I am always able to hear everyone speaking')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I am always attentive during a discussion.</Heading>

        <RadioButtonGroup
          name="question-3"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={thirdQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I am always attentive during a discussion')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          I always understand every statement acousticly and contentually.
        </Heading>

        <RadioButtonGroup
          name="question-4"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={fourthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'I always understand every statement acousticly and contentually',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I am never distracted during a discussion.</Heading>

        <RadioButtonGroup
          name="question-5"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={fifthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I am never distracted during a discussion')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I always know who is talking.</Heading>

        <RadioButtonGroup
          name="question-6"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={sixthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I always know who is talking')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I always know the person who is speaking.</Heading>

        <RadioButtonGroup
          name="question-7"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={seventhQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I always know the person who is speaking')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I always know every participant in a group.</Heading>

        <RadioButtonGroup
          name="question-8"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={eighthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I always know every participant in a group')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          If there are no tapping devices a single member can not prove that
          someone said something.
        </Heading>

        <RadioButtonGroup
          name="question-9"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={ninthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'If there are no tapping devices a single member can not prove that someone said something',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          If there are no tapping devices a single member can not prove that
          someone was a member of a specific group.
        </Heading>

        <RadioButtonGroup
          name="question-10"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={tenthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'If there are no tapping devices a single member can not prove that someone was a member of a specific group',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          It is sometimes important that no member in a group can prove that
          someone said something.
        </Heading>

        <RadioButtonGroup
          name="question-11"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={eleventhQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'It is sometimes important that no member in a group can prove that someone said something',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          Confidential private topics are only discussed in small groups.
        </Heading>

        <RadioButtonGroup
          name="question-12"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={twelfthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice(
              'Confidential private topics are only discussed in small groups',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          I always leave a group with an announcement.
        </Heading>

        <RadioButtonGroup
          name="question-13"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={thirteenthQuestionChoice}
          onChange={event => {
            const { value } = event.target;
            setQuestionChoice('I always leave a group with an announcement')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">
          If I want to leave a group in my favorite chat app, I will always give
          a reason.
        </Heading>

        <RadioButtonGroup
          name="question-14"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={fourteenthQuestionChoice}
          onChange={event => {
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
            browserHistory.push('/questions/2');
          }}
        />
      </Box>
    </Form>
  );
};

export default FirstQuestion;
