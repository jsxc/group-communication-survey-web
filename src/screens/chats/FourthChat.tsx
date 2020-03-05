import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './data';

const FourthChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { emil, arthur, tim } = users;

  const messages = [
    {
      text: 'Can someone lend me money for the lunch break?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: emil,
    },
    {
      text: 'Yes of course',
      createdAt: new Date('2020-01-30T20:01:00'),
      user: arthur,
    },
    {
      text: 'When are we meeting?',
      createdAt: new Date('2020-01-30T20:02:00'),
      user: arthur,
    },
    {
      text: 'I would be there too',
      createdAt: new Date('2020-01-30T20:03:00'),
      user: tim,
    },
    {
      text: 'After our meeting?',
      createdAt: new Date('2020-01-30T20:04:00'),
      user: emil,
    },
    {
      text: 'Ok see you later',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: arthur,
    },
    {
      text: 'cu',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: tim,
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
            browserHistory.push('/chat-4-feedback');
          }}
        />
      </Box>
    </>
  );
};

export default FourthChat;
