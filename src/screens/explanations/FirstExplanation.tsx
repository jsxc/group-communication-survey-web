import React from 'react';
import { Box, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const FirstExplanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <>
      <Box margin="medium">
        <Paragraph>
          In this survey we define a group as a set of people who like to
          communicate with each other. This can be a group of workmates, school
          friends, relatives or cooking enthusiasts.
        </Paragraph>

        <Paragraph>
          The term "group chat" refers to your favorite digital messenger like
          WhatsApp, Threema, Signal or whatever you are using.
        </Paragraph>

        <Paragraph>
          The following questions are related to real world groups. This means
          physical meetings or discussions in your every day life.
        </Paragraph>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push('/questions/1');
          }}
        />
      </Box>
    </>
  );
};

export default FirstExplanation;
