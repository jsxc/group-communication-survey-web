import React from 'react';
import { Box, Form, TextArea, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const SecondQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Are there cases where two or more people are talking at the same time?': firstQuestionChoice,
    'What is the result if two or more people are talking at the same time?': secondQuestionChoice,
    'What is the most common reaction if two or more people are talking at the same time?': thirdQuestionChoice,
    'What do you thing are the most frequent reasons of distraction even if you are interested at some discussion?': fourthQuestionChoice,
    'What are you doing if you are announcing something important?': fifthQuestionChoice,
    'Imagine you were distracted and you are now unable to follow the conversation. How do you react?': sixthQuestionChoice,
    'What is your most common reaction if a statement is unclear to you?': seventhQuestionChoice,
    'What is your reaction if you were not able to understand something acousticly?': eighthQuestionChoice,
    'Is there a difference in communication between business and leisure groups?': ninthQuestionChoice,
  } = data;

  const setQuestionChoice = (question: string) => (choice: string) => {
    return setData((data) => ({
      ...data,
      [question]: choice,
    }));
  };

  const areConditionalFieldsRequired = firstQuestionChoice === 'Yes';
  const areConditionalFieldsEmpty =
    !secondQuestionChoice || !thirdQuestionChoice;

  const isInvalidForm =
    [
      firstQuestionChoice,
      fourthQuestionChoice,
      fifthQuestionChoice,
      sixthQuestionChoice,
      seventhQuestionChoice,
      eighthQuestionChoice,
      ninthQuestionChoice,
    ].some(isNull) ||
    (areConditionalFieldsRequired && areConditionalFieldsEmpty);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={isNull(firstQuestionChoice)}>
          Are there cases where two or more people are talking at the same time?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={firstQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Are there cases where two or more people are talking at the same time?',
            )(value);
          }}
        />
      </Box>

      {firstQuestionChoice === 'Yes' ? (
        <>
          <Box margin="medium">
            <Heading level="4" error={isNull(secondQuestionChoice)}>
              What is the result if two or more people are talking at the same
              time?
            </Heading>

            <TextArea
              name="question-2"
              value={secondQuestionChoice || ''}
              onChange={(event) => {
                const { value } = event.target;
                setQuestionChoice(
                  'What is the result if two or more people are talking at the same time?',
                )(value);
              }}
            />
          </Box>

          <Box margin="medium">
            <Heading level="4" error={isNull(thirdQuestionChoice)}>
              What is the most common reaction if two or more people are talking
              at the same time?
            </Heading>

            <TextArea
              name="question-3"
              value={thirdQuestionChoice || ''}
              onChange={(event) => {
                const { value } = event.target;
                setQuestionChoice(
                  'What is the most common reaction if two or more people are talking at the same time?',
                )(value);
              }}
            />
          </Box>
        </>
      ) : null}

      <Box margin="medium">
        <Heading level="4" error={isNull(fourthQuestionChoice)}>
          What do you thing are the most frequent reasons of distraction even if
          you are interested at some discussion?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          other={true}
          options={[
            'Mobil phones',
            'Side conversations',
            'Weariness',
            'World of ideas',
          ]}
          value={fourthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'What do you thing are the most frequent reasons of distraction even if you are interested at some discussion?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(fifthQuestionChoice)}>
          What are you doing if you are announcing something important?
        </Heading>

        <RadioButtonGroup
          name="question-5"
          other={true}
          options={[
            'I just announce',
            'I wait until everyone is paying attention',
            'I require some kind of feedback, like a nod',
          ]}
          value={fifthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'What are you doing if you are announcing something important?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(sixthQuestionChoice)}>
          Imagine you were distracted and you are now unable to follow the
          conversation. How do you react?
        </Heading>

        <RadioButtonGroup
          name="question-6"
          other={true}
          options={[
            'I try to make sense of the further discussion',
            'I ask someone in the group',
            'I announce that I could not follow the conversation and ask if they can summaries the last minute',
          ]}
          value={sixthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Imagine you were distracted and you are now unable to follow the conversation. How do you react?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(seventhQuestionChoice)}>
          What is your most common reaction if a statement is unclear to you?
        </Heading>

        <RadioButtonGroup
          name="question-7"
          other={true}
          options={[
            'I ignore it',
            'I ask someone in the group',
            'I ask the group',
          ]}
          value={seventhQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'What is your most common reaction if a statement is unclear to you?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(eighthQuestionChoice)}>
          What is your reaction if you were not able to understand something
          acoustically?
        </Heading>

        <RadioButtonGroup
          name="question-8"
          other={true}
          options={[
            'I ignore it',
            'I try to make sense of it',
            'I ask someone in the group',
            'I ask the group',
          ]}
          value={eighthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'What is your reaction if you were not able to understand something acousticly?',
            )(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(ninthQuestionChoice)}>
          Is there a difference in communication between business and leisure
          groups? (If you think multiple answers are true, choose the one with
          the biggest difference)
        </Heading>

        <RadioButtonGroup
          name="question-9"
          other={true}
          options={[
            'Business groups have more often stricter rules',
            'In business meetings I am more reserved',
            'Business groups are given by some authority',
            'Leisure groups are more casual',
            'Communication in both groups is completely different',
            'The basic concept of both is the same',
          ]}
          value={ninthQuestionChoice}
          onChange={(event) => {
            const { value } = event.target;
            setQuestionChoice(
              'Is there a difference in communication between business and leisure groups?',
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
            browserHistory.push('/questions/3');
          }}
        />
      </Box>
    </Form>
  );
};

export default SecondQuestion;
