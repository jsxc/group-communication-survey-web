import React from 'react';
import {
  Box,
  Heading as GrommetHeading,
  HeadingProps as GrommetHeadingProps,
} from 'grommet';

type Props = GrommetHeadingProps & {
  error?: boolean;
};

const Heading: React.FC<Props> = props => {
  const { error = false, ...rest } = props;

  return (
    <Box direction="row" align="center">
      <Box
        style={{
          backgroundColor: error ? 'red' : undefined,
          width: 8,
          height: 8,
          borderRadius: 8 / 2,
          marginRight: 8,
        }}
      />

      <GrommetHeading {...rest} />
    </Box>
  );
};

export default Heading;
