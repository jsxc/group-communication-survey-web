import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './data';

const FifthChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { bernhardt, carla, doris } = users;

  const messages = [
    {
      text: 'I have to call in sick today',
      author: bernhardt,
      createdAt: new Date('2020-01-30T20:00:00'),
    },
    {
      text: 'You too?',
      author: carla,
      createdAt: new Date('2020-01-30T20:01:00'),
    },
    {
      text: 'Who else?',
      author: doris,
      createdAt: new Date('2020-01-30T20:02:00'),
    },
    {
      text: 'I thought you. No?',
      author: carla,
      createdAt: new Date('2020-01-30T20:03:00'),
    },
    {
      text: 'That would be new to me',
      author: doris,
      createdAt: new Date('2020-01-30T20:04:00'),
    },
    {
      text: 'One or more messages are missing',
      author: 'SYSTEM' as const,
      createdAt: new Date('2020-01-30T20:05:00'),
    },
    {
      text: 'Great, everything is going well today, right?',
      author: bernhardt,
      createdAt: new Date('2020-01-30T20:06:00'),
    },
    {
      text: 'Somehow it will work 😂',
      author: carla,
      createdAt: new Date('2020-01-30T20:07:00'),
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
            browserHistory.push('/feedback/5');
          }}
        />
      </Box>
    </>
  );
};

export default FifthChat;
