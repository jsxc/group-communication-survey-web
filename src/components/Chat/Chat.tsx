import React, { CSSProperties } from 'react';
import Message from './Message';
import { MessageContent } from './types';

type Props = {
  messages: MessageContent[];
  animationInterval?: number;
  onAnimationEnd?: () => void;
  style?: CSSProperties;
};

const Chat: React.FC<Props> = (props) => {
  const { messages, animationInterval = 1000, onAnimationEnd, style } = props;

  return (
    <div
      style={{
        flex: '1 1 auto',
        width: 450,
        height: 500,
        overflowY: 'auto',
        padding: 16,
        borderWidth: 2,
        borderColor: '#eee',
        borderStyle: 'solid',
        ...style,
      }}
    >
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
};

export default Chat;
