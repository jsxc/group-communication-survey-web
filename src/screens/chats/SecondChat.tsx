import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './data';

const SecondChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { karl, lara, arthur } = users;

  const messages = [
    {
      text: 'Did you watch the game yesterday?',
      author: karl,
      createdAt: new Date('2020-01-30T20:00:00'),
    },
    {
      text: 'One or more messages are missing',
      author: 'SYSTEM' as const,
      createdAt: new Date('2020-01-30T20:01:00'),
    },
    {
      text: '👍',
      author: lara,
      createdAt: new Date('2020-01-30T20:02:00'),
    },
    {
      text: 'One or more messages are missing',
      author: 'SYSTEM' as const,
      createdAt: new Date('2020-01-30T20:03:00'),
    },
    {
      text: 'Was out yesterday',
      author: arthur,
      createdAt: new Date('2020-01-30T20:04:00'),
    },
    {
      text: 'That in Stuttgart',
      author: karl,
      createdAt: new Date('2020-01-30T20:05:00'),
    },
    {
      text: 'One or more messages are missing',
      author: 'SYSTEM' as const,
      createdAt: new Date('2020-01-30T20:06:00'),
    },
    {
      text: 'That was Hammer',
      author: karl,
      createdAt: new Date('2020-01-30T20:07:00'),
    },
    {
      text: 'Visited Ingo',
      author: arthur,
      createdAt: new Date('2020-01-30T20:08:00'),
      inferenceQuote: '👍',
    },
    {
      text: 'How is he?',
      author: lara,
      createdAt: new Date('2020-01-30T20:09:00'),
    },
    {
      text: 'Yes yes',
      author: karl,
      createdAt: new Date('2020-01-30T20:10:00'),
    },
    {
      text: 'Just ignore me',
      author: karl,
      createdAt: new Date('2020-01-30T20:11:00'),
    },
  ];

  return (
    <>
      <Chat
        messages={messages}
        animationInterval={process.env.NODE_ENV === 'development' ? 100 : 1000}
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
            browserHistory.push('/feedback/2');
          }}
        />
      </Box>
    </>
  );
};

export default SecondChat;
