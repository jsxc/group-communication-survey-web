import React from 'react';
import { Box, Form, Heading, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const FifthQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Do you use programs that allow you to communicate with groups?': usesGroupChatClient,
  } = data;

  const setUsesGroupChatClient = (usesGroupChatClient: string) => {
    return setData(data => ({
      ...data,
      'Do you use programs that allow you to communicate with groups?': usesGroupChatClient,
    }));
  };

  const validateUsesGroupChatClientField = () => {
    if (isNull(usesGroupChatClient)) {
      return 'Required';
    }

    return null;
  };

  const usesGroupChatClientFieldError = validateUsesGroupChatClientField();
  const isInvalidForm = Boolean(usesGroupChatClientFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          Do you use programs that allow you to communicate with groups?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={usesGroupChatClient}
          onChange={event => {
            const { value } = event.target;
            setUsesGroupChatClient(value);
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push(
              usesGroupChatClient === 'Yes' ? '/questions/6' : '/explanation',
            );
          }}
        />
      </Box>
    </Form>
  );
};

export default FifthQuestion;