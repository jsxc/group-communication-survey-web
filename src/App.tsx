import React from 'react';
import { Grommet, Box, ThemeValue } from 'grommet';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { navigationalMap } from './navigation';
import { Header } from './components';
import { useGlobalState } from './hooks';
import { colors } from './constants';

const App: React.FC = () => {
  return (
    <Grommet theme={theme} full={true}>
      <BrowserRouter>
        <Header />

        <Box align="center" pad="medium">
          <Switch>
            {navigationalMap.map((entry, index) => (
              <Route
                key={index}
                path={entry.path}
                exact={entry.path === '/'}
                component={entry.screen}
              />
            ))}

            <Route path="*" component={() => <Redirect to="/" />} />
          </Switch>
        </Box>
      </BrowserRouter>
    </Grommet>
  );
};

const theme: ThemeValue = {
  global: {
    font: {
      family: 'Fira Sans',
    },
    colors: {
      control: colors.PRIMARY,
    },
  },
};

export default App;
