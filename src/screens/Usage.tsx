import React from 'react';
import { Box, Form, Heading, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../hooks';
import { isNull } from '../utilities';

const Usage: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const { usesGroupChatClient } = data;

  const browserHistory = useHistory();

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
          Do you use group chat clients such as WhatsApp?
        </Heading>

        <RadioButtonGroup
          name="question-1"
          options={['Yes', 'No']}
          value={(() => {
            if (isNull(usesGroupChatClient)) {
              return '';
            }

            if (usesGroupChatClient) {
              return 'Yes';
            }

            return 'No';
          })()}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
              usesGroupChatClient: value === 'Yes',
            }));
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
              usesGroupChatClient ? '/usage-statistics' : '/explanation',
            );
          }}
        />
      </Box>
    </Form>
  );
};

export default Usage;
