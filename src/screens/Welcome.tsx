import React from 'react';
import { Heading, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { getNextPathname } from '../utilities';

const Welcome: React.FC = () => {
  const browserHistory = useHistory();

  const {
    location: { pathname },
  } = browserHistory;

  return (
    <>
      <Heading level="3">Welcome to the survey</Heading>

      <Paragraph>
        Thank you for agreeing to participate in this study. First, you will be
        asked a few general questions. Afterwards, you will be shown 5 different
        group chat transcripts, alongside some questions. Thank you very much
        for your participation.
      </Paragraph>

      <Button
        type="submit"
        label="Next"
        margin="medium"
        onClick={() => {
          browserHistory.push(getNextPathname(pathname));
        }}
      />
    </>
  );
};

export default Welcome;
