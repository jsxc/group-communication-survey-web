import React, { useState } from 'react';
import { Box, Button, Paragraph } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../components';
import { fourthChatMessages } from './data/chats';

const FourthChat: React.FC = () => {
  const browserHistory = useHistory();
  const [hasAnimatedEnded, setAnimatedEnded] = useState(false);

  return (
    <>
      <Chat
        style={{ width: 800 }}
        mode="DRAWER"
        messages={fourthChatMessages}
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
            browserHistory.push('/feedback/4');
          }}
        />
      </Box>
    </>
  );
};

export default FourthChat;
