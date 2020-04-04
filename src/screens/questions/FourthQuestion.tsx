import React from 'react';
import { Box, Form, Button, CheckBox } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const FourthQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Which statements are true for the admission of a new member in a business group?': firstQuestionChoices,
    'Which statements are true for the admission of a new member in a casual group?': secondQuestionChoices,
    'Which statements are true for the admission of a new member in a confidential group?': thirdQuestionChoices,
    "How do you react if a new person joins a group that you don't like?": fourthQuestionChoice,
  } = data;

  const choices = [
    'Everyone can join',
    "It's ok if someone knows the new member",
    'I have to know the new member',
    'The new member has to be part of an organization or similar',
    "If I don't know the new member, I get to know him",
    'The new member is mostly invited/introduced by a member',
    'The new member is mostly requesting admission',
    'Before a new member is admitted into the group, this decision is discussed internally',
    "If I'm not satisfied with the new member I leave the group",
    "If I'm not satisfied with the new member I stop contributing",
  ];

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const setNestedQuestionChoice = (question: string) => (
    subquestion: string,
  ) => (choice: boolean) => {
    return setData((data) => ({
      ...data,
      [question]: {
        ...data[question],
        [subquestion]: choice,
      },
    }));
  };

  const isInvalidForm = isNull(fourthQuestionChoice);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          Which statements are true for the admission of a new member in a
          business group?
        </Heading>

        <>
          {choices.map((subquestion, index) => (
            <Box style={{ marginLeft: 16 }} key={index} pad="xxsmall">
              <CheckBox
                label={subquestion}
                checked={firstQuestionChoices[subquestion]}
                onChange={(event) => {
                  const { checked } = event.target;
                  setNestedQuestionChoice(
                    'Which statements are true for the admission of a new member in a business group?',
                  )(subquestion)(checked);
                }}
              />
            </Box>
          ))}
        </>
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Which statements are true for the admission of a new member in a
          casual group?
        </Heading>

        <>
          {choices.map((subquestion, index) => (
            <Box style={{ marginLeft: 16 }} key={index} pad="xxsmall">
              <CheckBox
                label={subquestion}
                checked={secondQuestionChoices[subquestion]}
                onChange={(event) => {
                  const { checked } = event.target;
                  setNestedQuestionChoice(
                    'Which statements are true for the admission of a new member in a casual group?',
                  )(subquestion)(checked);
                }}
              />
            </Box>
          ))}
        </>
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Which statements are true for the admission of a new member in a
          confidential group?
        </Heading>

        <>
          {choices.map((subquestion, index) => (
            <Box style={{ marginLeft: 16 }} key={index} pad="xxsmall">
              <CheckBox
                label={subquestion}
                checked={thirdQuestionChoices[subquestion]}
                onChange={(event) => {
                  const { checked } = event.target;
                  setNestedQuestionChoice(
                    'Which statements are true for the admission of a new member in a confidential group?',
                  )(subquestion)(checked);
                }}
              />
            </Box>
          ))}
        </>
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fourthQuestionChoice)}>
          How do you react if a new person joins a group that you don't like?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          other={true}
          options={[
            'I leave the group',
            'I try to get along with the new member',
            'If I like the group more than I dislike the new member I stay, otherwise I leave',
            'I try to convince all other members to exclude the new person',
            'I try to start a new group with a subset of the previous group',
          ]}
          value={fourthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              "How do you react if a new person joins a group that you don't like?",
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
            browserHistory.push('/questions/5');
          }}
        />
      </Box>
    </Form>
  );
};

export default FourthQuestion;
