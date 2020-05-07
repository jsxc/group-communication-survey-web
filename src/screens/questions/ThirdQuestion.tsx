import React from 'react';
import { Box, Form, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState, KEYS } from '../../hooks';
import { isNull } from '../../utilities';
import CheckBoxGroup from '../../components/CheckBoxGroup';

const ThirdQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    [KEYS.GROUP_MSG_UNKNOWN_MEMBER]: groupMsgUnknownMemberAnswers,
    'Are you always knowing who will hear your message?': secondQuestionChoice,
    'Are you aware of that?': thirdQuestionChoice,
    'In which cases is it especially important for you who will hear your messages?': fourthQuestionChoice,
    'Would it be sometimes important for you that nobody in the group can prove that you said something?': fifthQuestionChoice,
    'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': sixthQuestionChoice,
    'Do you think there are use cases in which plausible deniability of group membership is important?': seventhQuestionChoice,
    'Would it influence your behaviour if everything you say would be immediately published?': eighthQuestionChoice,
    [KEYS.GROUP_MSG_REQUIREMENT_CONFIDENTIAL]: groupMsgRequirementConfidentialAnswers,
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
    [
      secondQuestionChoice,
      fourthQuestionChoice,
      fifthQuestionChoice,
      sixthQuestionChoice,
      seventhQuestionChoice,
      eighthQuestionChoice,
    ].some(isNull) ||
    groupMsgUnknownMemberAnswers.length === 0 ||
    groupMsgRequirementConfidentialAnswers.length === 0 ||
    (areConditionalFieldsRequired && areConditionalFieldsEmpty);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={groupMsgUnknownMemberAnswers.length === 0}>
          What are you doing if you do not know someone in a group?
        </Heading>

        <CheckBoxGroup
          other={true}
          options={[
            'I ignore them',
            "I ignore them, if it's a causual group",
            'I ignore them, if I know the person belongs or should belong to a group',
            "It's ok, if someone in the group knows the person",
            'I ask the person to introduce himself',
            'If I think the person does not belong to the group I ask him to leave',
            'If I think the person does not belong to the group I will leave the group',
          ]}
          answers={groupMsgUnknownMemberAnswers}
          setAnswers={(answers) => {
            setData((data) => ({
              ...data,
              [KEYS.GROUP_MSG_UNKNOWN_MEMBER]: answers,
            }));
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(secondQuestionChoice)}>
          Do you always know who will hear your message?
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
          Do you think there are use cases in which plausible deniability of
          group membership is important?
        </Heading>

        <RadioButtonGroup
          name="question-7"
          options={['Yes', 'No', 'Not in my region, but there are places']}
          value={seventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Do you think there are use cases in which plausible deniability of group membership is important?',
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
        <Heading
          level="4"
          error={groupMsgRequirementConfidentialAnswers.length === 0}
        >
          Are there special requirements for groups if confidential topics are
          discussed?
        </Heading>

        <CheckBoxGroup
          other={true}
          options={[
            'No',
            'Every member should be known',
            'There should be no stranger listening',
            "It's important that every member is trustworthy",
          ]}
          answers={groupMsgRequirementConfidentialAnswers}
          setAnswers={(answers) => {
            setData((data) => ({
              ...data,
              [KEYS.GROUP_MSG_REQUIREMENT_CONFIDENTIAL]: answers,
            }));
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
