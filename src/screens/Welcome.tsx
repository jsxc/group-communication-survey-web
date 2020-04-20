import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../hooks';
import Logo from '../components/Logo';
import { colors } from '../constants';

const Welcome: React.FC = () => {
  const browserHistory = useHistory();
  const [, globalActions] = useGlobalState();

  const { setNavigation } = globalActions;

  return (
    <Box align="center" margin="large">
      <div
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          backgroundColor: colors.PRIMARY,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo variant="light" />
      </div>

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
