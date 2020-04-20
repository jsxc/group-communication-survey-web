import React from 'react';
import { Box, Heading, Meter } from 'grommet';
import { useLocation, Link } from 'react-router-dom';
import { useGlobalState } from '../hooks';
import { navigationalMap } from '../navigation';
import { colors } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [, globalActions] = useGlobalState();

  const { setNavigation } = globalActions;

  const location = useLocation();

  const currentScreenIndex = navigationalMap.findIndex(
    (entry) => entry.path === location.pathname,
  );

  const screensCount = navigationalMap.length;

  const progressPercentage = (currentScreenIndex / (screensCount - 1)) * 100;

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      pad="small"
      background={colors.PRIMARY}
    >
      <Link
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
        to="/"
        onClick={() => {
          setNavigation((navigation) => ({
            ...navigation,
            hasStarted: false,
          }));
        }}
      >
        <Heading level="3" margin="small">
          <Logo
            variant="light"
            style={{
              height: '1em',
              marginRight: '0.5em',
              verticalAlign: 'middle',
            }}
          />
          Group Communication Survey
        </Heading>
      </Link>

      <Meter
        margin="small"
        values={[{ value: progressPercentage }]}
        aria-label="meter"
      />
    </Box>
  );
};

export default Header;
