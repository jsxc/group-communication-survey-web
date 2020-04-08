import React, { useState, useEffect, CSSProperties } from 'react';
import { animated, useTransition } from 'react-spring';
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

  const transitions = useTransition(
    timedMessages,
    (timedMessage) => timedMessage.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
  );

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
      {transitions.map(({ props, key, item }) => (
        <animated.div style={props} key={key}>
          <Message {...item} />
        </animated.div>
      ))}
    </div>
  );
};

export default Chat;
