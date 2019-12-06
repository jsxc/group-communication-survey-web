import React from 'react';
import { Grommet, Box, Heading, ThemeValue } from 'grommet';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Welcome } from './screens';

const App: React.FC = () => {
  return (
    <Grommet theme={grommetTheme} full={true}>
      <Box pad="small" background="black">
        <Heading level="3" margin="small">
          Group Communication Survey
        </Heading>
      </Box>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </Grommet>
  );
};

const grommetTheme: ThemeValue = {
  global: {
    font: {
      family: 'Fira Sans',
    },
  },
};

export default App;
