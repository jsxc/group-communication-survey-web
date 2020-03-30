import React from 'react';
import { Box, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const FourthExplanation: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <>
      <Box margin="medium">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push('/feedback');
          }}
        />
      </Box>
    </>
  );
};

export default FourthExplanation;
