import React from 'react';
import { Grommet, Box, Heading, Meter, ThemeValue } from 'grommet';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import {
  Welcome,
  Demographic,
  Definition,
  Expectation,
  Usage,
  UsageStatistics,
  Explanation,
  FurtherExplanation,
  FirstChat,
  SecondChat,
  ThirdChat,
  FourthChat,
  FifthChat,
  ThankYou,
} from './screens';
import { colors } from './constants';

/* TODO: Reset app if an intermediary route is accessed */

const App: React.FC = () => {
  return (
    <Grommet theme={theme} full={true}>
      <BrowserRouter>
        <Box
          direction="row"
          justify="between"
          align="center"
          pad="small"
          background={colors.PRIMARY}
        >
          <Link style={styles.link} to="/">
            <Heading level="3" margin="small">
              Group Communication Survey
              <span role="img" aria-label="Chat bubble emoji">
                {' 💬'}
              </span>
            </Heading>
          </Link>

          <Meter
            margin="small"
            values={[{ value: (100 * 1) / 5 }]}
            aria-label="meter"
          />
        </Box>

        <Box align="center" pad="medium">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/demographic" component={Demographic} />
            <Route path="/definition" component={Definition} />
            <Route path="/expectation" component={Expectation} />
            <Route path="/usage" component={Usage} />
            <Route path="/usage-statistics" component={UsageStatistics} />
            <Route path="/explanation" component={Explanation} />
            <Route path="/further-explanation" component={FurtherExplanation} />
            <Route path="/chat-1" component={FirstChat} />
            <Route path="/chat-2" component={SecondChat} />
            <Route path="/chat-3" component={ThirdChat} />
            <Route path="/chat-4" component={FourthChat} />
            <Route path="/chat-5" component={FifthChat} />
            <Route path="/thank-you" component={ThankYou} />
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

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default App;
