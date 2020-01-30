import React from 'react';
import { Box, Form, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const Explanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <Form>
      <Box margin="medium">
        <Paragraph>
          As already mentioned, you will now see 5 group chat conversations,
          alongside some questions about the respective conversation. Please
          only click on "Next" if you think that you understood the content of
          the conversation.
        </Paragraph>

        <Paragraph>
          You can interact with the display as normal, i.e. scroll, click, or
          whatever else you can think of.
        </Paragraph>

        <Paragraph>
          This survey is about the representation of the conversations; and more
          specifically, the context of messages. For example, an answer always
          relates to a specific question. But what happens when different
          members receive different questions in a group conversation? This
          could lead to misunderstandings. Therefore, this survey tests
          different group chat representations and their impact on understanding
          the conversation.
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

export default Explanation;
