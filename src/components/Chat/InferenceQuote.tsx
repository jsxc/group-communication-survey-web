import React, { CSSProperties } from 'react';
import { Box, Text } from 'grommet';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  text: string;
  tooltipText?: string;
  visible?: boolean;
  style?: CSSProperties;
};

const InferenceQuote: React.FC<Props> = (props) => {
  const {
    text,
    tooltipText = 'The sender saw this message last',
    visible = true,
    style,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <Tooltip title={tooltipText} placement="right" arrow={true}>
      <Box
        alignSelf="start"
        margin={{ top: '8px', bottom: '-8px', left: '-16px' }}
        pad={{ vertical: '12px', horizontal: 'small' }}
        background="#b2b2b2"
        round="16px"
        style={style}
      >
        <Text style={{ fontFamily: 'Lato' }} size="xsmall">
          {text}
        </Text>
      </Box>
    </Tooltip>
  );
};

export default InferenceQuote;
