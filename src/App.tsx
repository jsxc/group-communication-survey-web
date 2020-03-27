import React from 'react';
import { Grommet, Box, ThemeValue } from 'grommet';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { navigationalMap } from './navigation';
import { Header, ScrollToTop } from './components';
import { useGlobalState } from './hooks';
import { colors } from './constants';

const App: React.FC = () => {
  const [globalState] = useGlobalState();

  const { navigation } = globalState;
  const { hasStarted } = navigation;

  return (
    <Grommet theme={theme}>
      <BrowserRouter>
        <Header />

        <Box align="center" pad="medium">
          {hasStarted ? null : <Redirect to="/" />}

          <ScrollToTop />

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
