import React, { useState, useEffect } from 'react';
import { Box, Image } from 'grommet';
import {
  GiftedChat,
  Bubble,
  IMessage as GiftedChatMessage,
} from 'react-web-gifted-chat';
import { randomId } from '../utilities';

type User = {
  name: string;
  avatar: string;
};

type Message = {
  text: string;
  createdAt: Date;
  user: User;
  replyTo?: string;
};

type Props = {
  messages: Message[];
  animationInterval?: number;
  onAnimationEnd?: () => void;
};

const transformMessage = (message: Message): any => {
  return {
    ...message,
    id: randomId(),
    user: {
      ...message.user,
      id: randomId(),
    },
  };
};

const TreeChat: React.FC<Props> = (props) => {
  const { messages, animationInterval, onAnimationEnd } = props;

  const transformedMessages = messages.map(transformMessage);
  const operationalAnimationInterval = animationInterval ?? 1000;

  const [timedMessages, setTimedMessages] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);

  const appendTimedMessage = (message: GiftedChatMessage): void => {
    setTimedMessages((timedMessages) => {
      return GiftedChat.append(timedMessages, [message]);
    });
  };

  useEffect(() => {
    transformedMessages.forEach((message, index) => {
      const timeoutId = setTimeout(
        () => appendTimedMessage(message),
        index * operationalAnimationInterval,
      );

      setTimeoutIds((timeoutIds) => timeoutIds.concat(timeoutId));
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };

    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    if (transformedMessages.length === timedMessages.length) {
      onAnimationEnd?.();
    }

    /* eslint-disable-next-line */
  }, [timedMessages]);

  return (
    <Box style={{ width: 450, height: 500 }} border="all">
      <GiftedChat
        timeFormat="HH:mm"
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        messageIdGenerator={randomId}
        user={{ id: 1 }}
        messages={timedMessages.filter(
          (timedMessage) => !Boolean(timedMessage.replyTo),
        )}
        renderMessage={(props: any) => {
          const { currentMessage } = props;

          const currentMessageReplies = timedMessages.filter(
            (timedMessage) => timedMessage.replyTo === currentMessage.text,
          );

          return (
            <Box direction="row">
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  margin: 8,
                }}
                src={currentMessage.user.avatar}
              />

              <Box>
                <Bubble
                  {...props}
                  renderUsernameOnMessage={true}
                  renderAvatarOnTop={true}
                />

                <Box>
                  {currentMessageReplies
                    .map(transformMessage)
                    .map((reply, index) => {
                      return (
                        <Box
                          key={index}
                          direction="row"
                          margin={{ vertical: 'xsmall', horizontal: 'medium' }}
                        >
                          <Image
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 40 / 2,
                              margin: 8,
                            }}
                            src={reply.user.avatar}
                          />

                          <Bubble
                            {...props}
                            currentMessage={reply}
                            renderUsernameOnMessage={true}
                          />
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
          );
        }}
        renderInputToolbar={() => null}
        renderMessageImage={() => null}
      />
    </Box>
  );
};

export default TreeChat;
