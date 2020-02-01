import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import { Contact } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { colors } from '../constants';

const Welcome: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <Box align="center" margin="large">
      <Contact color={colors.PRIMARY} size="xlarge" />

      <Box align="center" margin="large">
        <Heading level="3" margin="xsmall">
          Welcome to the survey
        </Heading>

        <Paragraph>
          Thank you for agreeing to participate in this study. First, you will
          be asked a few general questions. Afterwards, you will be shown 5
          different group chat transcripts, alongside some questions. Thank you
          very much for your participation.
        </Paragraph>

        <Button
          type="submit"
          label="Next"
          margin="medium"
          onClick={() => {
            browserHistory.push('/demographic');
          }}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
