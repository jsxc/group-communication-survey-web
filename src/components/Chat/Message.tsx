import React, { CSSProperties } from 'react';
import { Box, Text, Image, Button } from 'grommet';
import SystemMessage from './SystemMessage';
import InferenceQuote from './InferenceQuote';
import { ChatMode, MessageContent, User } from './types';
import { colors } from '../../constants';

type Props = MessageContent & {
  mode?: ChatMode;
  replies?: MessageContent[];
  onRepliesCountClick?: (message: MessageContent) => void;
  style?: CSSProperties;
};

const Message: React.FC<Props> = (props) => {
  const {
    id,
    text,
    author,
    createdAt,
    inferenceQuote,
    replyTo,
    mode = 'REGULAR',
    replies = [],
    onRepliesCountClick,
    style,
  } = props;

  const message = {
    id,
    text,
    author,
    createdAt,
    inferenceQuote,
    replyTo,
  };

  const isRegularMode = mode === 'REGULAR';
  const isTreeMode = mode === 'TREE';
  const isDrawerMode = mode === 'DRAWER';
  const repliesCount = replies.length;

  if (author === 'SYSTEM') {
    return <SystemMessage text={text} />;
  }

  if (isDrawerMode && Boolean(replyTo)) {
    return null;
  }

  return (
    <Box
      direction="row"
      align="end"
      margin={{
        vertical: 'xsmall',
        left: isTreeMode && replyTo ? 'large' : '0px',
      }}
      style={style}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
        margin={{ right: 'small' }}
        draggable={false}
        src={(author as User).avatar}
      />

      <Box>
        <InferenceQuote
          visible={isRegularMode && Boolean(inferenceQuote)}
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
              {(author as User).name}
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

          {mode === 'DRAWER' && repliesCount > 0 ? (
            <Box margin={{ top: 'xsmall' }}>
              <Button
                as="a"
                color={colors.PRIMARY}
                plain={true}
                label={
                  <Text size="12px">{constructRepliesText(repliesCount)}</Text>
                }
                onClick={() => {
                  onRepliesCountClick?.(message);
                }}
              />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

const formatTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleTimeString('de', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const constructRepliesText = (repliesCount: number): string => {
  if (repliesCount === 1) {
    return `${repliesCount} reply`;
  }

  return `${repliesCount} replies`;
};

export default Message;
