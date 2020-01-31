import React from 'react';
import { Box, Heading, Meter } from 'grommet';
import { useLocation, Link } from 'react-router-dom';
import { navigationalMap } from '../navigation';
import { colors } from '../constants';

const Header: React.FC = () => {
  const location = useLocation();

  const currentScreenIndex = navigationalMap.findIndex(
    entry => entry.path === location.pathname,
  );

  const screensCount = navigationalMap.length;

  const progressPercentage = (currentScreenIndex / screensCount) * 100;

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
      >
        <Heading level="3" margin="small">
          Group Communication Survey
          <span role="img" aria-label="Chat bubble emoji">
            {' 💬'}
          </span>
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
