import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { randomId } from '../../utilities';
import { users } from './data';

const FourthChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { emil, arthur, tim } = users;

  const messages = [
    {
      text: 'Can someone lend me money for the lunch break?',
      author: emil,
      createdAt: new Date('2020-01-30T20:00:00'),
    },
    {
      text: 'Yes of course',
      author: arthur,
      createdAt: new Date('2020-01-30T20:01:00'),
    },
    {
      text: 'When are we meeting?',
      author: arthur,
      createdAt: new Date('2020-01-30T20:02:00'),
    },
    {
      text: 'I would be there too',
      author: tim,
      createdAt: new Date('2020-01-30T20:03:00'),
    },
    {
      text: 'After our meeting?',
      author: emil,
      createdAt: new Date('2020-01-30T20:04:00'),
    },
    {
      text: 'Ok see you later',
      author: arthur,
      createdAt: new Date('2020-01-30T20:05:00'),
    },
    {
      text: 'cu',
      author: tim,
      createdAt: new Date('2020-01-30T20:06:00'),
    },
  ].map((message) => ({ ...message, id: randomId() }));

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
            browserHistory.push('/feedback/4');
          }}
        />
      </Box>
    </>
  );
};

export default FourthChat;
