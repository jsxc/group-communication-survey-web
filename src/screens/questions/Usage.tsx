import React, { useState } from 'react';
import { Box, Form, Heading, Button, RadioButtonGroup } from 'grommet';
import { useHistory } from 'react-router-dom';
import { getNextPathname } from '../../utilities';

const Usage: React.FC = () => {
  const [state, setState] = useState({
    usesGroupChatClient: false,
  });

  const browserHistory = useHistory();

  const {
    location: { pathname },
  } = browserHistory;

  const { usesGroupChatClient } = state;

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">
          Do you use group chat clients such as WhatsApp?
        </Heading>

        <RadioButtonGroup
          name="question"
          options={['Yes', 'No']}
          value={usesGroupChatClient ? 'Yes' : 'No'}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              usesGroupChatClient: value === 'Yes',
            }));
          }}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push(getNextPathname(pathname));
          }}
        />
      </Box>
    </Form>
  );
};

export default Usage;
