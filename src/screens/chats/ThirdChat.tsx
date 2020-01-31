import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './data';

const ThirdChat: React.FC = () => {
  const { ines, karl, richard } = users;

  const messages = [
    {
      text: 'Karl, did you prepare the presentation?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: ines,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:01:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: 'I did it',
      createdAt: new Date('2020-01-30T20:02:00'),
      user: karl,
    },
    {
      text: 'One or more messages are missing',
      createdAt: new Date('2020-01-30T20:03:00'),
      user: null,
      isSystemMessage: true,
    },
    {
      text: 'Oh and what about the invitation?',
      createdAt: new Date('2020-01-30T20:04:00'),
      user: ines,
    },
    {
      text: 'Unfortunately I have not yet been able to do so',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: karl,
      inferenceQuote: 'Karl, did you prepare the presentation?',
    },
    {
      text: 'Should I still do that?',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: richard,
      inferenceQuote: 'I did it',
    },
    {
      text: 'No, I can still manage it',
      createdAt: new Date('2020-01-30T20:07:00'),
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

export default ThirdChat;
