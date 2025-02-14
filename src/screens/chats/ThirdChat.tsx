import React, { useState } from 'react';
import { Box, Button, Paragraph } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { thirdChatMessages } from './data/chats';

const ThirdChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  return (
    <>
      <Chat
        mode="TREE"
        messages={thirdChatMessages}
        animationInterval={process.env.NODE_ENV === 'development' ? 100 : 1000}
        onAnimationEnd={() => {
          setAnimatedEnded(true);
        }}
      />

      <Box align="center" margin="medium">
        <Paragraph size="small">
          Please interact with the visualization before you click "Next".
        </Paragraph>

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
