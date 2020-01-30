import React, { useState } from 'react';
import { Box, Form, Heading, FormField, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../../components';
import { getNextPathname } from '../../utilities';

const UsageStatistics: React.FC = () => {
  const [state, setState] = useState({
    groupsCount: 0,
    regularlyUsedGroupsCount: 0,
    smallestGroupMembersCount: 0,
    largestGroupMembersCount: 0,
    hasGroupsCountBeenBlurred: false,
    hasRegularlyUsedGroupsCountBeenBlurred: false,
    hasSmallestGroupMembersCountBeenBlurred: false,
    hasLargestGroupMembersCountBeenBlurred: false,
  });

  const browserHistory = useHistory();

  const {
    location: { pathname },
  } = browserHistory;

  const validateGroupsCountField = () => {
    const { groupsCount } = state;

    const LOWER_BOUND = 0;
    const UPPER_BOUND = 500;

    if (!groupsCount) {
      return 'Required';
    }

    if (groupsCount < LOWER_BOUND || groupsCount > UPPER_BOUND) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateRegularlyUsedGroupsCountField = () => {
    const { groupsCount, regularlyUsedGroupsCount } = state;

    const LOWER_BOUND = 0;
    const UPPER_BOUND = groupsCount || 500;

    if (!regularlyUsedGroupsCount) {
      return 'Required';
    }

    if (
      regularlyUsedGroupsCount < LOWER_BOUND ||
      regularlyUsedGroupsCount > UPPER_BOUND
    ) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateSmallestGroupMembersCountField = () => {
    const { smallestGroupMembersCount } = state;

    const LOWER_BOUND = 1;
    const UPPER_BOUND = 500;

    if (!smallestGroupMembersCount) {
      return 'Required';
    }

    if (
      smallestGroupMembersCount < LOWER_BOUND ||
      smallestGroupMembersCount > UPPER_BOUND
    ) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateLargestGroupMembersCountField = () => {
    const { smallestGroupMembersCount, largestGroupMembersCount } = state;

    const LOWER_BOUND = smallestGroupMembersCount || 0;
    const UPPER_BOUND = 500;

    if (!largestGroupMembersCount) {
      return 'Required';
    }

    if (
      largestGroupMembersCount < LOWER_BOUND ||
      largestGroupMembersCount > UPPER_BOUND
    ) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const {
    groupsCount,
    regularlyUsedGroupsCount,
    smallestGroupMembersCount,
    largestGroupMembersCount,
    hasGroupsCountBeenBlurred,
    hasRegularlyUsedGroupsCountBeenBlurred,
    hasSmallestGroupMembersCountBeenBlurred,
    hasLargestGroupMembersCountBeenBlurred,
  } = state;

  const groupsCountFieldError = validateGroupsCountField();
  const regularlyUsedGroupsCountFieldError = validateRegularlyUsedGroupsCountField();
  const smallestGroupMembersCountFieldError = validateSmallestGroupMembersCountField();
  const largestGroupMembersCountFieldError = validateLargestGroupMembersCountField();

  const isInvalidForm =
    Boolean(groupsCountFieldError) ||
    Boolean(regularlyUsedGroupsCountFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">How many groups do you have?</Heading>

        <FormField
          type="number"
          name="question-1"
          value={groupsCount || ''}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              groupsCount: value ? parseInt(value) : null,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasGroupsCountBeenBlurred: true,
            }));
          }}
        />

        <ErrorText visible={hasGroupsCountBeenBlurred}>
          {groupsCountFieldError}
        </ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4">How many groups do you use regularly?</Heading>

        <FormField
          type="number"
          name="question-2"
          value={regularlyUsedGroupsCount || ''}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              regularlyUsedGroupsCount: value ? parseInt(value) : null,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasRegularlyUsedGroupsCountBeenBlurred: true,
            }));
          }}
        />

        <ErrorText visible={hasRegularlyUsedGroupsCountBeenBlurred}>
          {regularlyUsedGroupsCountFieldError}
        </ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4">
          How many members does the smallest group have?
        </Heading>

        <FormField
          type="number"
          name="question-3"
          value={smallestGroupMembersCount || ''}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              smallestGroupMembersCount: value ? parseInt(value) : null,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasSmallestGroupMembersCountBeenBlurred: true,
            }));
          }}
        />

        <ErrorText visible={hasSmallestGroupMembersCountBeenBlurred}>
          {smallestGroupMembersCountFieldError}
        </ErrorText>
      </Box>

      <Box margin="medium">
        <Heading level="4">
          How many members does the largest group have?
        </Heading>

        <FormField
          type="number"
          name="question-4"
          value={largestGroupMembersCount || ''}
          onChange={event => {
            const { value } = event.target;

            setState(state => ({
              ...state,
              largestGroupMembersCount: value ? parseInt(value) : null,
            }));
          }}
          onBlur={() => {
            setState(state => ({
              ...state,
              hasLargestGroupMembersCountBeenBlurred: true,
            }));
          }}
        />

        <ErrorText visible={hasLargestGroupMembersCountBeenBlurred}>
          {largestGroupMembersCountFieldError}
        </ErrorText>
      </Box>

      <Box align="center" margin="medium">
        <Button
          type="submit"
          label="Next"
          disabled={isInvalidForm}
          onClick={() => {
            browserHistory.push(getNextPathname(pathname));
          }}
        />
      </Box>
    </Form>
  );
};

export default UsageStatistics;
