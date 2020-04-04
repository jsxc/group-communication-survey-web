import React from 'react';
import { Box, Form, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull, any } from '../../utilities';

const ThirdQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'What are you doing if you do not know someone in a group?': firstQuestionChoice,
    'Are you always knowing who will hear your message?': secondQuestionChoice,
    'Are you aware of that?': thirdQuestionChoice,
    'In which cases is it especially important for you who will hear your messages?': fourthQuestionChoice,
    'Would it be sometimes important for you that nobody in the group can prove that you said something?': fifthQuestionChoice,
    'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': sixthQuestionChoice,
    'Do you thing there are use cases in which plausible deniability of group membership is important?': seventhQuestionChoice,
    'Would it influence your behaviour if everything you say would be immediately published?': eighthQuestionChoice,
    'Are there special requirements for groups if confidential topics are discussed?': ninthQuestionChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const areConditionalFieldsRequired = secondQuestionChoice === 'No';
  const areConditionalFieldsEmpty = isNull(thirdQuestionChoice);

  const isInvalidForm =
    any(isNull)([
      firstQuestionChoice,
      secondQuestionChoice,
      fourthQuestionChoice,
      fifthQuestionChoice,
      sixthQuestionChoice,
      seventhQuestionChoice,
      eighthQuestionChoice,
      ninthQuestionChoice,
    ]) ||
    (areConditionalFieldsRequired && areConditionalFieldsEmpty);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={isNull(firstQuestionChoice)}>
          What are you doing if you do not know someone in a group?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          other={true}
          options={[
            'I ignore it',
            "I ignore it, if it's a causual group",
            'I ignore it, if I know the person belongs or should belong to a group',
            "It's ok, if someone in the group knows the person",
            'I ask the person to introduce himself',
            'If I think the person does not belong to the group I ask him to leave',
            'If I think the person does not belong to the group I will leave the group',
          ]}
          value={firstQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'What are you doing if you do not know someone in a group?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(secondQuestionChoice)}>
          Are you always knowing who will hear your message?
        </Heading>

        <RadioButtonGroup
          name="question-2"
          options={['No', 'Yes']}
          value={secondQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Are you always knowing who will hear your message?',
            )(value);
          }}
        />
      </Box>

      {secondQuestionChoice === 'No' ? (
        <Box margin="medium">
          <Heading level="4" error={isNull(thirdQuestionChoice)}>
            Are you aware of that?
          </Heading>

          <RadioButtonGroup
            name="question-3"
            options={['Yes', 'No']}
            value={thirdQuestionChoice}
            onChange={(event) => {
              const { value } = event.target;
              setQuestionChoice('Are you aware of that?')(value);
            }}
          />
        </Box>
      ) : null}

      <Box margin="medium">
        <Heading level="4" error={isNull(fourthQuestionChoice)}>
          In which cases is it especially important for you who will hear your
          messages?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          other={true}
          options={['Confidential topics', 'In general', 'Never']}
          value={fourthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'In which cases is it especially important for you who will hear your messages?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fifthQuestionChoice)}>
          Would it be sometimes important for you that nobody in the group can
          prove that you said something?
        </Heading>

        <RadioButtonGroup
          name="question-5"
          options={['Yes', 'No']}
          value={fifthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Would it be sometimes important for you that nobody in the group can prove that you said something?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(sixthQuestionChoice)}>
          Would it be sometimes important for you that nobody in the group can
          prove that you were part in a group?
        </Heading>

        <RadioButtonGroup
          name="question-6"
          options={['Yes', 'No']}
          value={sixthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(seventhQuestionChoice)}>
          Do you thing there are use cases in which plausible deniability of
          group membership is important?
        </Heading>

        <RadioButtonGroup
          name="question-7"
          options={['Yes', 'No', 'Not in my region, but there are places']}
          value={seventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you thing there are use cases in which plausible deniability of group membership is important?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(eighthQuestionChoice)}>
          Would it influence your behaviour if everything you say would be
          immediately published?
        </Heading>

        <RadioButtonGroup
          name="question-8"
          options={['Yes', 'No']}
          value={eighthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Would it influence your behaviour if everything you say would be immediately published?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(ninthQuestionChoice)}>
          Are there special requirements for groups if confidential topics are
          discussed?
        </Heading>

        <RadioButtonGroup
          name="question-9"
          other={true}
          options={[
            'No',
            'Every member should be known',
            'There should be no stranger listening',
            "It's important that every member is trustworthy",
          ]}
          value={ninthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Are there special requirements for groups if confidential topics are discussed?',
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
            browserHistory.push('/questions/4');
          }}
        />
      </Box>
    </Form>
  );
};

export default ThirdQuestion;
