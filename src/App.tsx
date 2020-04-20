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

  const isProductionEnvironment = process.env.NODE_ENV === 'production';
  const shouldRedirectToLandingPage = isProductionEnvironment && !hasStarted;

  return (
    <Grommet theme={theme}>
      <BrowserRouter>
        <Header />

        <Box align="center" pad="medium" style={{ paddingBottom: '5em' }}>
          {shouldRedirectToLandingPage ? <Redirect to="/" /> : null}

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

        <footer
          style={{
            backgroundColor: '#dcdcdc',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '5em',
            fontSize: '0.8em',
            opacity: 0.6,
          }}
        >
          <p>
            This study is conducted by{' '}
            <a href="https://www.disy.uni-konstanz.de/members/research-assistants/klaus-herberth/">
              Klaus Herberth
            </a>{' '}
            from the{' '}
            <a href="https://www.disy.uni-konstanz.de">
              Distributed Systems Laboratory
            </a>{' '}
            at the
            <a href="https://www.uni-konstanz.de/en/">University of Konstanz</a>
            .
          </p>
        </footer>
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
