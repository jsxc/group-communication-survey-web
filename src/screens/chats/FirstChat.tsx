import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './data';

const FirstChat: React.FC = () => {
  const { karl, lara, arthur } = users;

  const messages = [
    {
      text: 'Did you watch the game yesterday?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: karl,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:01:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: '👍',
      createdAt: new Date('2020-01-30T20:02:00'),
      user: lara,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:03:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: 'Was out yesterday',
      createdAt: new Date('2020-01-30T20:04:00'),
      user: arthur,
    },
    {
      text: 'That in Stuttgart',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: karl,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: 'That was Hammer',
      createdAt: new Date('2020-01-30T20:07:00'),
      user: karl,
    },
    {
      text: 'Visited Ingo',
      createdAt: new Date('2020-01-30T20:08:00'),
      user: arthur,
      inferenceQuote: '👍',
    },
    {
      text: 'How is he?',
      createdAt: new Date('2020-01-30T20:09:00'),
      user: lara,
    },
    {
      text: 'Yes yes',
      createdAt: new Date('2020-01-30T20:10:00'),
      user: karl,
    },
    {
      text: 'Just ignore me',
      createdAt: new Date('2020-01-30T20:11:00'),
      user: karl,
    },
  ];

  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const browserHistory = useHistory();

  return (
    <>
      <Chat
        messages={messages}
        onAnimationEnd={() => {
          setAnimatedEnded(true);
        }}
      />

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={!hasAnimatedEnded}
          onClick={() => {
            browserHistory.push('/thank-you');
          }}
        />
      </Box>
    </>
  );
};

export default FirstChat;
