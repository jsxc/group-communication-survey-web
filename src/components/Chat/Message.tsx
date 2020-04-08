import React, { CSSProperties } from 'react';
import { Box, Text, Image } from 'grommet';
import SystemMessage from './SystemMessage';
import InferenceQuote from './InferenceQuote';
import { MessageContent } from './types';

type Props = MessageContent & {
  style?: CSSProperties;
};

const Message: React.FC<Props> = (props) => {
  const { text, author, createdAt, inferenceQuote, style } = props;

  if (author === 'SYSTEM') {
    return <SystemMessage text={text} />;
  }

  return (
    <Box
      margin={{ vertical: 'xsmall' }}
      direction="row"
      align="end"
      style={style}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
        margin={{ right: 'small' }}
        src={author.avatar}
      />

      <Box>
        <InferenceQuote
          visible={Boolean(inferenceQuote)}
          text={inferenceQuote}
        />

        <Box pad="small" background="#eee" round="16px">
          <Text size="15px">{text}</Text>

          <Box direction="row" justify="between">
            <Text margin={{ top: 'xsmall' }} size="12px" color="#999">
              {author.name}
            </Text>

            <Text
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
