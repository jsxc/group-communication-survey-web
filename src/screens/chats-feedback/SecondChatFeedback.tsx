import React from 'react';
import { Box, Form, Heading, Text, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import { constructRadioOptions } from './utilities';
import { isNull, replaceAt } from '../../utilities';

const SecondChatFeedback: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { secondChatFeedback } = data;
  const [
    firstQuestionChoice,
    secondQuestionChoice,
    thirdQuestionChoice,
  ] = secondChatFeedback;

  const browserHistory = useHistory();

  const setQuestionChoice = (questionIndex: number) => (
    choiceIndex: number,
  ) => {
    setData(data => {
      const updatedFeedback = replaceAt<number>(questionIndex)(choiceIndex)(
        data.secondChatFeedback,
      );

      return {
        ...data,
        secondChatFeedback: updatedFeedback,
      };
    });
  };

  const validateRadioFieldChoice = (index: number) => {
    const choice = secondChatFeedback[index];

    if (isNull(choice)) {
      return 'Required';
    }

    return null;
  };

  const firstQuestionOptions = ['0', '1', '2', '3', '4', '5'].map(
    constructRadioOptions,
  );

  const secondQuestionOptions = [
    'Yes',
    'No',
    'This was not mentioned in the conversation',
    'There were contradicting statements',
    'There was too little information about this',
  ].map(constructRadioOptions);

  const thirdQuestionOptions = [
    'Yes',
    'No',
    'This was not mentioned in the conversation',
    'There were contradicting statements',
    'There was too little information about this',
  ].map(constructRadioOptions);

  const firstQuestionChoiceError = validateRadioFieldChoice(0);
  const secondQuestionChoiceError = validateRadioFieldChoice(1);
  const thirdQuestionChoiceError = validateRadioFieldChoice(2);

  const isInvalidForm =
    Boolean(firstQuestionChoiceError) ||
    Boolean(secondQuestionChoiceError) ||
    Boolean(thirdQuestionChoiceError);

  return (
    <Form>
      <Box margin="medium">
        <Heading style={{ marginBottom: 0 }} level="4">
          How well did you understand the conversation?
        </Heading>

        <Text style={{ marginBottom: 12, fontStyle: 'italic' }} size="small">
          (On a scale of 0 to 5; 0 being very badly and 5 being very well)
        </Text>

        <RadioButtonGroup
          direction="row"
          name="question-1"
          options={firstQuestionOptions}
          value={(() => {
            if (isNull(firstQuestionChoice)) {
              return '';
            }

            return String(firstQuestionChoice);
          })()}
          onChange={event => {
            const { value } = event.target;
            const choice = Number(value);

            setQuestionChoice(0)(choice);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">Is Arthur alright?</Heading>

        <RadioButtonGroup
          name="question-2"
          options={secondQuestionOptions}
          value={(() => {
            if (isNull(secondQuestionChoice)) {
              return '';
            }

            return String(secondQuestionChoice);
          })()}
          onChange={event => {
            const { value } = event.target;
            const choice = Number(value);

            setQuestionChoice(1)(choice);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4">
          Does Arthur know the other driver involved in the accident?
        </Heading>

        <RadioButtonGroup
          name="question-3"
          options={thirdQuestionOptions}
          value={(() => {
            if (isNull(thirdQuestionChoice)) {
              return '';
            }

            return String(thirdQuestionChoice);
          })()}
          onChange={event => {
            const { value } = event.target;
            const choice = Number(value);

            setQuestionChoice(2)(choice);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push('/chat-3');
          }}
        />
      </Box>
    </Form>
  );
};

export default SecondChatFeedback;