import React from 'react';
import { Box, Form, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const ThirdExplanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <Form>
      <Box margin="medium">
        <Paragraph>
          Due to various circumstances, individual members in a group chat may
          not receive some messages. As a result, statements or answers can
          appear out of context.
        </Paragraph>

        <Paragraph>
          Not only can missing messages lead to misunderstandings, but also
          messages outside the context in which they were sent. For example,
          let's say you don't have Internet access and still send a message.
          Since you are offline, this message will only be sent when you are
          online again. During this time, the conversation in the group could
          already be on a completely different topic.
        </Paragraph>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push('/chats/1');
          }}
        />
      </Box>
    </Form>
  );
};

export default ThirdExplanation;
