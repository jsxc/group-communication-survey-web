import React from 'react';
import { Box, Paragraph, Button, Heading } from 'grommet';
import { useHistory } from 'react-router-dom';

const SecondExplanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <>
      <Box margin="medium">
        <Heading level="3" margin="xsmall">
          Part 2
        </Heading>

        <Paragraph>
          As already mentioned, you will now see some group chat conversations,
          alongside some questions about the respective conversation. Please
          only click on "Next" if you think that you{' '}
          <strong>understood the content</strong> of the conversation.
        </Paragraph>

        <Paragraph>
          <strong>You can interact</strong> with the display as normal, i.e.
          scroll, click, or whatever else you can think of.
        </Paragraph>

        <Paragraph>
          This survey is about the representation of conversations; and more
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
            browserHistory.push('/chats/1');
          }}
        />
      </Box>
    </>
  );
};

export default SecondExplanation;
