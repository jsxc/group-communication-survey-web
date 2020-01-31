import React from 'react';
import { Box } from 'grommet';

const InferenceQuote: React.FC = props => {
  const { children } = props;

  return (
    <Box
      style={{
        width: 50,
        height: 60,
        marginBottom: -16,
        marginLeft: -25,
        alignItems: 'center',
        background: '#b2b2b2',
        borderRadius: 20,
      }}
    >
      <p>{children}</p>
    </Box>
  );
};

export default InferenceQuote;
