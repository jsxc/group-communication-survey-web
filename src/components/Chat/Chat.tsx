import React, { useState, useEffect, CSSProperties } from 'react';
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

  const [timedMessages, setTimedMessages] = useState([]);

  useEffect(() => {
    let timeoutIds = [];

    messages.forEach((message, index) => {
      const timeoutId = setTimeout(() => {
        setTimedMessages((timedMessages) => timedMessages.concat(message));
      }, index * animationInterval);

      timeoutIds = timeoutIds.concat(timeoutId);
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [messages, animationInterval]);

  useEffect(() => {
    if (messages.length === timedMessages.length) {
      onAnimationEnd?.();
    }
  }, [messages, timedMessages, onAnimationEnd]);

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
      {timedMessages.map((timedMessage) => (
        <Message key={timedMessage.id} {...timedMessage} />
      ))}
    </div>
  );
};

export default Chat;
