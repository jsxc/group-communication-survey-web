import React from 'react';
import { Box, Form, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const FurtherExplanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <Form>
      <Box margin="medium">
        <Paragraph>
          Due to various circumstances, individual members in a group chat may
          not receive some messages. As a result, statements or answers can
          appear out of context. The box with the dashed border indicates the
          absence of one or more messages.
        </Paragraph>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push('/thank-you');
          }}
        />
      </Box>
    </Form>
  );
};

export default FurtherExplanation;
