import React, { CSSProperties } from 'react';
import { Box, Text, Button } from 'grommet';
import { Close } from 'grommet-icons';
import Message from './Message';
import { MessageContent } from './types';
import { colors } from '../../constants';

type Props = {
  messages?: MessageContent[];
  onDismiss?: () => void;
  style?: CSSProperties;
};

const Drawer: React.FC<Props> = (props) => {
  const { messages = [], onDismiss, style } = props;

  return (
    <Box
      pad={{ horizontal: 'small' }}
      border={{
        color: '#eee',
        style: 'solid',
        size: '2px',
        side: 'left',
      }}
      style={{ ...style }}
    >
      <Box
        direction="row"
        align="center"
        margin={{ vertical: 'xsmall' }}
        pad={{ bottom: 'xsmall' }}
        border="bottom"
      >
        <Button
          margin={{ right: 'small', top: '8px' }}
          as="a"
          color={colors.PRIMARY}
          plain={true}
          onClick={() => {
            onDismiss?.();
          }}
        >
          <Close size="18px" color={colors.PRIMARY} />
        </Button>

        <Text
          style={{ fontFamily: 'Lato' }}
          margin={{ vertical: 'small' }}
          size="medium"
          color="#999"
        >
          Replies
        </Text>
      </Box>

      {messages.map((message) => {
        return <Message {...message} />;
      })}
    </Box>
  );
};

export default Drawer;
