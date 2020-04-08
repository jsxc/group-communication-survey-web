import React, { CSSProperties } from 'react';
import { Box, Text, Image } from 'grommet';
import SystemMessage from './SystemMessage';
import InferenceQuote from './InferenceQuote';
import { MessageContent } from './types';

type Props = MessageContent & {
  style?: CSSProperties;
};

const Message: React.FC<Props> = (props) => {
  const { text, author, createdAt, inferenceQuote, replyTo, style } = props;

  if (author === 'SYSTEM') {
    return <SystemMessage text={text} />;
  }

  return (
    <Box
      direction="row"
      align="end"
      margin={{ vertical: 'xsmall', left: replyTo ? 'large' : '0px' }}
      style={style}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
        margin={{ right: 'small' }}
        draggable={false}
        src={author.avatar}
      />

      <Box>
        <InferenceQuote
          visible={Boolean(inferenceQuote)}
          text={inferenceQuote}
        />

        <Box pad="small" background="#eee" round="16px">
          <Text style={{ fontFamily: 'Lato' }} size="15px">
            {text}
          </Text>

          <Box direction="row" justify="between">
            <Text
              style={{ fontFamily: 'Lato' }}
              margin={{ top: 'xsmall' }}
              size="12px"
              color="#999"
            >
              {author.name}
            </Text>

            <Text
              style={{ fontFamily: 'Lato' }}
              margin={{ top: 'xsmall', left: 'medium' }}
              size="12px"
              color="#999"
            >
              {formatTimestamp(createdAt)}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const formatTimestamp = (timestamp: Date) => {
  return timestamp.toLocaleTimeString('de', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default Message;
