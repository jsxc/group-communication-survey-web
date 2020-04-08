import React, { CSSProperties } from 'react';
import { Box, Text } from 'grommet';

type Props = {
  text: string;
  style?: CSSProperties;
};

const SystemMessage: React.FC<Props> = (props) => {
  const { text, style } = props;

  return (
    <Box margin="small" style={style}>
      <Text
        style={{ fontFamily: 'Lato' }}
        size="xsmall"
        color="#bbb"
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
};

export default SystemMessage;
