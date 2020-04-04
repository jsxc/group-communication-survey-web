import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import { Chat } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../hooks';
import { colors } from '../constants';

const Welcome: React.FC = () => {
  const browserHistory = useHistory();
  const [, globalActions] = useGlobalState();

  const { setNavigation } = globalActions;

  return (
    <Box align="center" margin="large">
      <Chat color={colors.PRIMARY} size="xlarge" />

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
            setNavigation((navigation) => ({
              ...navigation,
              hasStarted: true,
            }));

            browserHistory.push('/demographic');
          }}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
