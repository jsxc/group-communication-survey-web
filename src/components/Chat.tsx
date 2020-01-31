import React from 'react';
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
  const { messages } = props;

  const transformedMessages = messages.map(transformMessage).reverse();

  return (
    <Box style={{ width: 500, height: 500 }} border="all">
      <GiftedChat
        timeFormat="HH:mm"
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        messageIdGenerator={randomId}
        user={{ id: 1 }}
        messages={transformedMessages}
        renderMessageImage={() => null}
        renderBubble={props => {
          const { currentMessage } = props;
          const { image: inferenceQuote } = currentMessage;

          return (
            <Box>
              {inferenceQuote ? (
                <InferenceQuote>{inferenceQuote}</InferenceQuote>
              ) : null}

              <Bubble {...props} renderUsernameOnMessage={true} />
            </Box>
          );
        }}
        onSend={() => {}}
      />
    </Box>
  );
};

export default Chat;
