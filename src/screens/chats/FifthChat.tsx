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
      createdAt: new Date('2020-01-30T20:00:00'),
      user: bernhardt,
    },
    {
      text: 'You too?',
      createdAt: new Date('2020-01-30T20:01:00'),
      user: carla,
    },
    {
      text: 'Who else?',
      createdAt: new Date('2020-01-30T20:02:00'),
      user: doris,
    },
    {
      text: 'I thought you. No?',
      createdAt: new Date('2020-01-30T20:03:00'),
      user: carla,
    },
    {
      text: 'That would be new to me',
      createdAt: new Date('2020-01-30T20:04:00'),
      user: doris,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: 'Great, everything is going well today, right?',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: bernhardt,
    },
    {
      text: 'Somehow it will work 😂',
      createdAt: new Date('2020-01-30T20:07:00'),
      user: carla,
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
