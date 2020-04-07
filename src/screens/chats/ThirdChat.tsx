import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { TreeChat } from '../../components';
import { users } from './data';

const ThirdChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  const { ines, karl, richard } = users;

  const messages = [
    {
      text: 'Karl, did you prepare the presentation?',
      createdAt: new Date('2020-01-30T20:00:00'),
      user: ines,
    },
    {
      text: 'I did it',
      createdAt: new Date('2020-01-30T20:02:00'),
      user: karl,
      replyTo: 'Karl, did you prepare the presentation?',
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
      replyTo: 'Oh and what about the invitation?',
    },
    {
      text: 'Should I still do that?',
      createdAt: new Date('2020-01-30T20:06:00'),
      user: richard,
      replyTo: 'Oh and what about the invitation?',
    },
    {
      text: 'No, I can still manage it',
      createdAt: new Date('2020-01-30T20:07:00'),
      user: karl,
      replyTo: 'Oh and what about the invitation?',
    },
  ];

  return (
    <>
      <TreeChat
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
