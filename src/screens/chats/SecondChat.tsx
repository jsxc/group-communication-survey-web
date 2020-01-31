import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './constants';

const SecondChat: React.FC = () => {
  const [Karl, Lara, Arthur] = users;

  const messages = [
    {
      text: 'Hey guys can anyone take me tomorrow?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: Arthur,
    },
    {
      text: "What's wrong?",
      createdAt: new Date('2020-01-30T20:01:00'),
      user: Karl,
    },
    {
      text: "You actually don't miss a chance to pose with your cart ...",
      createdAt: new Date('2020-01-30T20:02:00'),
      user: Karl,
    },
    {
      text: 'Everything alright?',
      createdAt: new Date('2020-01-30T20:03:00'),
      user: Lara,
    },
    {
      text: 'Well, stupid story 😂',
      createdAt: new Date('2020-01-30T20:04:00'),
      user: Arthur,
    },
    {
      text: 'A tractor and my BMW had a disagreement',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: Arthur,
    },
    {
      text: '???',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: Lara,
    },
    {
      text: '😂 Oh dear, I feel bad',
      createdAt: new Date('2020-01-30T20:07:00'),
      user: Karl,
    },
    {
      text:
        "He said he had to cut the curve and my parked BMW didn't want to make room",
      createdAt: new Date('2020-01-30T20:08:00'),
      user: Arthur,
    },
    {
      text: 'Do you have the other driver?',
      createdAt: new Date('2020-01-30T20:09:00'),
      user: Karl,
    },
    {
      text: 'Yup',
      createdAt: new Date('2020-01-30T20:10:00'),
      user: Arthur,
    },
    {
      text: 'But are you okay?',
      createdAt: new Date('2020-01-30T20:11:00'),
      user: Lara,
    },
    {
      text: 'No',
      createdAt: new Date('2020-01-30T20:12:00'),
      user: Arthur,
    },
    {
      text: "But that's stupid",
      createdAt: new Date('2020-01-30T20:13:00'),
      user: Lara,
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

export default SecondChat;
