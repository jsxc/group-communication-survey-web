import React from 'react';
import { Heading, Paragraph, Button } from 'grommet';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const browserHistory = useHistory();

  return (
    <>
      <Heading level="3">Willkommen zur 2. Umfrage</Heading>

      <Paragraph>
        Danke das du dich bereit erklärt hast bei dieser Studie mitzumachen.
        Zuerst folgen ein paar allgemeine Fragen und dann werden dir 5
        Gesprächsprotokolle gezeigt und einige Fragen dazu gestellt. Vielen Dank
        jetzt schon für deine Teilnahme.
      </Paragraph>

      <Button
        type="submit"
        label="Weiter"
        margin="medium"
        onClick={() => {
          browserHistory.push('/general');
        }}
      />
    </>
  );
};

export default Welcome;
