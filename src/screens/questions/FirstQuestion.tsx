import React from 'react';
import { Box, Form, Heading, Text, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import { constructRadioOptions } from '../chats-feedback/utilities'; /* TODO */
import { isNull, any } from '../../utilities';

const FirstQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Even if I am not allowed to talk, I always have the possibility to do so': firstStatementChoice,
    'I am always able to hear everyone speaking': secondStatementChoice,
    'I am always attentive during a discussion': thirdStatementChoice,
    'I always understand every statement acousticly and contentually': fourthStatementChoice,
    'I am never distracted during a discussion': fifthStatementChoice,
    'I always know who is talking': sixthStatementChoice,
    'I always know the person who is speaking': seventhStatementChoice,
    'I always know every participant in a group': eighthStatementChoice,
    'If there are no tapping devices a single member can not prove that someone said something': ninthStatementChoice,
    'If there are no tapping devices a single member can not prove that someone was a member of a specific group': tenthStatementChoice,
    'It is sometimes important that no member in a group can prove that someone said something': eleventhStatementChoice,
    'Confidential private topics are only discussed in small groups': twelfthStatementChoice,
    'I always leave a group with an announcement': thirteenthStatementChoice,
    'If I want to leave a group in my favorite chat app, I will always give a reason': fourteenthStatementChoice,
  } = data;

  const setStatementChoice = (statement: string) => (choice: string) => {
    return setData(data => ({
      ...data,
      [statement]: choice,
    }));
  };

  const options = ['0', '1', '2', '3', '4'];

  const isInvalidForm = any(isNull)([
    firstStatementChoice,
    secondStatementChoice,
    thirdStatementChoice,
    fourthStatementChoice,
    fifthStatementChoice,
    sixthStatementChoice,
    seventhStatementChoice,
    eighthStatementChoice,
    ninthStatementChoice,
    tenthStatementChoice,
    eleventhStatementChoice,
    twelfthStatementChoice,
    thirteenthStatementChoice,
    fourteenthStatementChoice,
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
          value={firstStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={secondStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I am always able to hear everyone speaking')(
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
          value={thirdStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I am always attentive during a discussion')(
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
          value={fourthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={fifthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I am never distracted during a discussion')(
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
          value={sixthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I always know who is talking')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="5">I always know the person who is speaking.</Heading>

        <RadioButtonGroup
          name="question-7"
          direction="row"
          options={options.map(constructRadioOptions)}
          value={seventhStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I always know the person who is speaking')(
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
          value={eighthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I always know every participant in a group')(
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
          value={ninthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={tenthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={eleventhStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={twelfthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
          value={thirteenthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice('I always leave a group with an announcement')(
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
          value={fourteenthStatementChoice}
          onChange={event => {
            const { value } = event.target;
            setStatementChoice(
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
