import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { GiftedChat, Bubble } from 'react-web-gifted-chat';

const random = (minimum: number, maximum: number) => {
  return Math.floor(Math.random() * maximum) + minimum;
};

const randomId = () => {
  return random(1000, 9999);
};

const users = [
  {
    name: 'Karl',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhumenonline.hu%2Fwp-content%2Fuploads%2F2015%2F10%2FMG_3634-Edit.jpg&f=1&nofb=1',
  },
  {
    name: 'Lara',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.easterneuropeantravel.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fee-girls.jpg%3Fresize%3D499%252C281&f=1&nofb=1',
  },
  {
    name: 'Arthur',
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdpegb9ebondhq.cloudfront.net%2Fproduct_photos%2F56847089%2F_E4_BA_A7_E5_93_81SKU__E8_97_8F_E9_9D_92_E5_8A_A0_E7_81_B0(1)_large.jpg&f=1&nofb=1',
  },
].map(user => ({
  ...user,
  id: randomId(),
}));

const Chat1: React.FC = () => {
  const [Karl, Lara, Arthur] = users;

  const [messages] = useState(
    [
      {
        text: 'Did you watch the game yesterday?',
        createdAt: new Date('2020-01-30T20:00:00'),
        user: Karl,
      },
      {
        text: 'One or more messages are missing',
        createdAt: new Date('2020-01-30T20:01:00'),
        user: null,
        system: true,
      },
      {
        text: '👍',
        createdAt: new Date('2020-01-30T20:02:00'),
        user: Lara,
      },
      {
        text: 'One or more messages are missing',
        createdAt: new Date('2020-01-30T20:03:00'),
        user: null,
        system: true,
      },
      {
        text: 'Was out yesterday',
        createdAt: new Date('2020-01-30T20:04:00'),
        user: Arthur,
      },
      {
        text: 'That in Stuttgart',
        createdAt: new Date('2020-01-30T20:05:00'),
        user: Karl,
      },
      {
        text: 'One or more messages are missing',
        createdAt: new Date('2020-01-30T20:06:00'),
        user: null,
        system: true,
      },
      {
        text: 'That was Hammer',
        createdAt: new Date('2020-01-30T20:07:00'),
        user: Karl,
      },
      {
        text: 'Visited Ingo',
        createdAt: new Date('2020-01-30T20:08:00'),
        user: Arthur,
        image: '👍',
      },
      {
        text: 'How is he?',
        createdAt: new Date('2020-01-30T20:09:00'),
        user: Lara,
      },
      {
        text: 'Yes yes',
        createdAt: new Date('2020-01-30T20:10:00'),
        user: Karl,
      },
      {
        text: 'Just ignore me',
        createdAt: new Date('2020-01-30T20:11:00'),
        user: Karl,
      },
    ]
      .map(message => ({ ...message, id: randomId() }))
      .reverse(),
  );

  const browserHistory = useHistory();

  return (
    <>
      <Box style={{ width: 500, height: 500 }} border="all">
        <GiftedChat
          timeFormat="HH:mm"
          alwaysShowSend={true}
          showAvatarForEveryMessage={true}
          messageIdGenerator={() => String(randomId())}
          user={{ id: 1 }}
          messages={messages}
          renderMessageImage={() => null}
          renderBubble={props => {
            const {
              currentMessage: { image },
            } = props;

            return (
              <Box>
                {image ? (
                  <Box
                    style={{
                      width: 50,
                      height: 60,
                      marginBottom: -16,
                      marginLeft: -25,
                      alignItems: 'center',
                      background: '#b2b2b2',
                      borderRadius: 20,
                    }}
                  >
                    <p>{image}</p>
                  </Box>
                ) : null}

                <Bubble {...props} renderUsernameOnMessage={true} />
              </Box>
            );
          }}
          onSend={() => {}}
        />
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          onClick={() => {
            browserHistory.push('/thank-you');
          }}
        />
      </Box>
    </>
  );
};

export default Chat1;