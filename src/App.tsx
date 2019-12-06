import React from 'react';
import { Grommet, Box, Heading, ThemeValue } from 'grommet';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Welcome, Demographic, ThankYou } from './screens';

const App: React.FC = () => {
  return (
    <Grommet theme={theme} full={true}>
      <BrowserRouter>
        <Box align="start" pad="small" background="black">
          <Link style={styles.link} to="/">
            <Heading level="3" margin="small">
              Group Communication Survey
              <span role="img" aria-label="Chat bubble emoji">
                {' 💬'}
              </span>
            </Heading>
          </Link>
        </Box>

        <Box align="center" pad="xlarge">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/general" component={Demographic} />
            <Route path="/thank-you" component={ThankYou} />
            <Route component={() => <Redirect to="/" />} />
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
  },
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default App;
