import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { randomId } from '../../utilities';
import { users } from './data';

const ThirdChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { ines, karl, richard } = users;

  const messages = [
    {
      text: 'Karl, did you prepare the presentation?',
      author: ines,
      createdAt: new Date('2020-01-30T20:00:00'),
    },
    {
      text: 'I did it',
      author: karl,
      createdAt: new Date('2020-01-30T20:02:00'),
      replyTo: 'Karl, did you prepare the presentation?',
    },
    {
      text: 'Oh and what about the invitation?',
      author: ines,
      createdAt: new Date('2020-01-30T20:04:00'),
    },
    {
      text: 'Unfortunately I have not yet been able to do so',
      author: karl,
      createdAt: new Date('2020-01-30T20:05:00'),
      replyTo: 'Oh and what about the invitation?',
    },
    {
      text: 'Should I still do that?',
      author: richard,
      createdAt: new Date('2020-01-30T20:06:00'),
      replyTo: 'Oh and what about the invitation?',
    },
    {
      text: 'No, I can still manage it',
      author: karl,
      createdAt: new Date('2020-01-30T20:07:00'),
      replyTo: 'Oh and what about the invitation?',
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
            browserHistory.push('/feedback/3');
          }}
        />
      </Box>
    </>
  );
};

export default ThirdChat;
