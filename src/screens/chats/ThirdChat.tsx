import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { users } from './constants';

const FirstChat: React.FC = () => {
  const [Karl, Lara, Arthur, Ines, Richard] = users;

  const messages = [
    {
      text: 'Karl, did you prepare the presentation?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: Ines,
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
      user: Karl,
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
      user: Ines,
    },
    {
      text: 'Unfortunately I have not yet been able to do so',
      createdAt: new Date('2020-01-30T20:05:00'),
      user: Karl,
      inferenceQuote: 'Karl, did you prepare the presentation?',
    },
    {
      text: 'Should I still do that?',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: Richard,
      inferenceQuote: 'I did it',
    },
    {
      text: 'No, I can still manage it',
      createdAt: new Date('2020-01-30T20:07:00'),
      user: Karl,
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
