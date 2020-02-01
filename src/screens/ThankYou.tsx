import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Checkmark } from 'grommet-icons';
import { colors } from '../constants';

const ThankYou: React.FC = () => {
  return (
    <Box align="center" margin="large">
      <Checkmark color={colors.PRIMARY} size="xlarge" />

      <Box align="center" margin="large">
        <Heading level="3" margin="xsmall">
          Thank you
        </Heading>

        <Paragraph>Thank you for your participation</Paragraph>
      </Box>
    </Box>
  );
};

export default ThankYou;
