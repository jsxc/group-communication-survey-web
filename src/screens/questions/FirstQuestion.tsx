import React, { useEffect } from 'react';
import { Box, Form, Button, Paragraph } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState, KEYS } from '../../hooks';
import { isNull } from '../../utilities';

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
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  useEffect(() => {
    if (!data[KEYS.STAT_START]) {
      setData((data) => ({
        ...data,
        [KEYS.STAT_START]: new Date(),
      }));
    }
  });

  const options = ['0', '1', '2', '3', '4', '5'];

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
    eleventhQuestionChoice,
    twelfthQuestionChoice,
    thirteenthQuestionChoice,
  ].some(isNull);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          How far do you agree with the following statements?
        </Heading>
        <Paragraph>
          Remember: The following questions are related to{' '}
          <strong>real world groups</strong>. This means physical meetings or
          discussions in your every day life.
        </Paragraph>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(firstQuestionChoice)}>
          Even if I'm not allowed to talk, I always have the possibility to do
          so.
        </Heading>

        <RadioButtonGroup
          name="question-1"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={firstQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Even if I am not allowed to talk, I always have the possibility to do so',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(secondQuestionChoice)}>
          I am always able to hear everyone speaking.
        </Heading>

        <RadioButtonGroup
          name="question-2"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={secondQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I am always able to hear everyone speaking')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(thirdQuestionChoice)}>
          I am always attentive during a discussion.
        </Heading>

        <RadioButtonGroup
          name="question-3"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={thirdQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I am always attentive during a discussion')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fourthQuestionChoice)}>
          I always understand every statement acoustically and contentual.
        </Heading>

        <RadioButtonGroup
          name="question-4"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={fourthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'I always understand every statement acousticly and contentually',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fifthQuestionChoice)}>
          I am never distracted during a discussion.
        </Heading>

        <RadioButtonGroup
          name="question-5"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={fifthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I am never distracted during a discussion')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(sixthQuestionChoice)}>
          I always know who is talking.
        </Heading>

        <RadioButtonGroup
          name="question-6"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={sixthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I always know who is talking')(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(seventhQuestionChoice)}>
          I always know the person who is speaking.
        </Heading>

        <RadioButtonGroup
          name="question-7"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={seventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I always know the person who is speaking')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(eighthQuestionChoice)}>
          I always know every participant in a group.
        </Heading>

        <RadioButtonGroup
          name="question-8"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={eighthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I always know every participant in a group')(
              value,
            );
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(ninthQuestionChoice)}>
          If there are no tapping devices a single member can not prove that
          someone said something.
        </Heading>

        <RadioButtonGroup
          name="question-9"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={ninthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'If there are no tapping devices a single member can not prove that someone said something',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(tenthQuestionChoice)}>
          If there are no tapping devices a single member can not prove that
          someone was a member of a specific group.
        </Heading>

        <RadioButtonGroup
          name="question-10"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={tenthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'If there are no tapping devices a single member can not prove that someone was a member of a specific group',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(eleventhQuestionChoice)}>
          It is sometimes important that no member in a group can prove that
          someone said something.
        </Heading>

        <RadioButtonGroup
          name="question-11"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={eleventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'It is sometimes important that no member in a group can prove that someone said something',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(twelfthQuestionChoice)}>
          Confidential private topics are only discussed in small groups.
        </Heading>

        <RadioButtonGroup
          name="question-12"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={twelfthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Confidential private topics are only discussed in small groups',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(thirteenthQuestionChoice)}>
          I always leave a group with an announcement.
        </Heading>

        <RadioButtonGroup
          name="question-13"
          direction="row"
          scale={true}
          firstOptionLabel="Disagree"
          lastOptionLabel="Agree"
          options={options}
          value={thirteenthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice('I always leave a group with an announcement')(
              value,
            );
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
