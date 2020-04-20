import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import { animated, useTransition } from 'react-spring';
import Drawer from './Drawer';
import Message from './Message';
import { MessageContent, ChatMode } from './types';

type Props = {
  messages: MessageContent[];
  mode?: ChatMode;
  animationInterval?: number;
  onAnimationEnd?: () => void;
  style?: CSSProperties;
};

const Chat: React.FC<Props> = (props) => {
  const {
    messages,
    mode = 'REGULAR',
    animationInterval = 1000,
    onAnimationEnd,
    style,
  } = props;

  const [timedMessages, setTimedMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const isDrawerMode = mode === 'DRAWER';
  const isDrawerVisible = isDrawerMode && Boolean(selectedMessage);
  const selectedMessageReplies = timedMessages.filter(
    isReplyTo(selectedMessage),
  );

  const transitions = useTransition(
    timedMessages,
    (timedMessage) => timedMessage.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
  );

  const anchorRef = useRef(null);

  useEffect(() => {
    let timeoutIds = [];

    messages.forEach((message, index) => {
      const timeoutId = setTimeout(() => {
        setTimedMessages((timedMessages) => {
          if (!message.replyTo) {
            return timedMessages.concat(message);
          }

          let refIndex = 0;
          timedMessages.forEach((msg, i) => {
            if (msg.text === message.replyTo) {
              refIndex = i;
            }
          });

          timedMessages.splice(refIndex + 1, 0, message);

          return timedMessages;
        });
      }, index * animationInterval);

      timeoutIds = timeoutIds.concat(timeoutId);
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [messages, animationInterval]);

  useEffect(() => {
    anchorRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [timedMessages]);

  useEffect(() => {
    if (messages.length === timedMessages.length) {
      onAnimationEnd?.();
    }
  }, [messages, timedMessages, onAnimationEnd]);

  const handleRepliesClick = (message: MessageContent) => {
    setSelectedMessage(message);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto',
        width: 450,
        height: 500,
        borderWidth: 2,
        borderColor: '#eee',
        borderStyle: 'solid',
        ...style,
      }}
    >
      <div
        style={{
          flex: isDrawerVisible ? 0.6 : 1,
          padding: 16,
          overflowY: 'auto',
        }}
      >
        {transitions.map(({ key, props: animatedProps, item: message }) => (
          <animated.div style={animatedProps} key={key}>
            <Message
              {...message}
              mode={mode}
              replies={timedMessages.filter(isReplyTo(message))}
              onRepliesCountClick={handleRepliesClick}
            />
          </animated.div>
        ))}

        <div ref={anchorRef} />
      </div>

      {isDrawerVisible ? (
        <Drawer
          style={{ flex: 0.4 }}
          messages={selectedMessageReplies}
          onDismiss={() => {
            setSelectedMessage(null);
          }}
        />
      ) : null}
    </div>
  );
};

const isReplyTo = (message: MessageContent) => (
  element: MessageContent,
): boolean => {
  return message?.text === element.replyTo;
};

export default Chat;
