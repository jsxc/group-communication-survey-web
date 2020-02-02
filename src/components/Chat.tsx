import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import { GiftedChat, Bubble, IMessage } from 'react-web-gifted-chat';
import InferenceQuote from './InferenceQuote';
import { random } from '../utilities';

type User = {
  name: string;
  avatar: string;
};

type Message = {
  text: string;
  inferenceQuote?: string;
  isSystemMessage?: boolean;
  createdAt: Date;
  user: User;
};

type Props = {
  messages: Message[];
  animationInterval?: number;
  onAnimationEnd?: () => void;
};

const randomId = (): string => {
  return String(random(1000, 9999));
};

const transformMessage = (message: Message): IMessage => {
  return {
    ...message,
    id: randomId(),
    image: message.inferenceQuote,
    system: message.isSystemMessage,
    user: {
      ...message.user,
      id: randomId(),
    },
  };
};

const Chat: React.FC<Props> = props => {
  const { messages, animationInterval, onAnimationEnd } = props;

  const transformedMessages = messages.map(transformMessage);
  const operationalAnimationInterval = animationInterval || 1000;

  const [timedMessages, setTimedMessages] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);

  const appendTimedMessage = (message: IMessage): void => {
    setTimedMessages(timedMessages => {
      return GiftedChat.append(timedMessages, [message]);
    });
  };

  useEffect(() => {
    transformedMessages.forEach((message, index) => {
      const timeoutId = setTimeout(
        () => appendTimedMessage(message),
        index * operationalAnimationInterval,
      );

      setTimeoutIds(timeoutIds => timeoutIds.concat(timeoutId));
    });

    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    if (transformedMessages.length === timedMessages.length) {
      onAnimationEnd?.();
    }
  }, [timedMessages]);

  return (
    <Box style={{ width: 450, height: 500 }} border="all">
      <GiftedChat
        timeFormat="HH:mm"
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        messageIdGenerator={randomId}
        user={{ id: 1 }}
        messages={timedMessages}
        renderBubble={props => {
          const { currentMessage } = props;
          const { image: inferenceQuote } = currentMessage;

          return (
            <Box>
              {inferenceQuote ? (
                <InferenceQuote tooltipText="The sender saw this message last">
                  {inferenceQuote}
                </InferenceQuote>
              ) : null}

              <Bubble {...props} renderUsernameOnMessage={true} />
            </Box>
          );
        }}
        renderInputToolbar={() => null}
        renderMessageImage={() => null}
      />
    </Box>
  );
};

export default Chat;
