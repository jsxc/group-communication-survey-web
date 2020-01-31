import React, { useState } from 'react';
import { Box, Form, Heading, FormField, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { ErrorText } from '../components';
import { useGlobalState } from '../hooks';
import { isNull } from '../utilities';

const UsageStatistics: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    groupsCount,
    regularlyUsedGroupsCount,
    smallestGroupMembersCount,
    largestGroupMembersCount,
  } = data;

  const [state, setState] = useState({
    hasGroupsCountBeenBlurred: false,
    hasRegularlyUsedGroupsCountBeenBlurred: false,
    hasSmallestGroupMembersCountBeenBlurred: false,
    hasLargestGroupMembersCountBeenBlurred: false,
  });

  const {
    hasGroupsCountBeenBlurred,
    hasRegularlyUsedGroupsCountBeenBlurred,
    hasSmallestGroupMembersCountBeenBlurred,
    hasLargestGroupMembersCountBeenBlurred,
  } = state;

  const browserHistory = useHistory();

  const validateGroupsCountField = () => {
    const LOWER_BOUND = 0;
    const UPPER_BOUND = 500;

    if (isNull(groupsCount)) {
      return 'Required';
    }

    if (groupsCount < LOWER_BOUND || groupsCount > UPPER_BOUND) {
      return `Must be between ${LOWER_BOUND} and ${UPPER_BOUND}`;
    }

    return null;
  };

  const validateRegularlyUsedGroupsCountField = () => {
    const LOWER_BOUND = 0;
    const UPPER_BOUND = groupsCount || 500;

    if (isNull(regularlyUsedGroupsCount)) {
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
    const LOWER_BOUND = 1;
    const UPPER_BOUND = 500;

    if (isNull(smallestGroupMembersCount)) {
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
    const LOWER_BOUND = smallestGroupMembersCount || 0;
    const UPPER_BOUND = 500;

    if (isNull(largestGroupMembersCount)) {
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

  const groupsCountFieldError = validateGroupsCountField();
  const regularlyUsedGroupsCountFieldError = validateRegularlyUsedGroupsCountField();
  const smallestGroupMembersCountFieldError = validateSmallestGroupMembersCountField();
  const largestGroupMembersCountFieldError = validateLargestGroupMembersCountField();

  const isInvalidForm =
    Boolean(groupsCountFieldError) ||
    Boolean(regularlyUsedGroupsCountFieldError) ||
    Boolean(smallestGroupMembersCountFieldError) ||
    Boolean(largestGroupMembersCountFieldError);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4">How many groups do you have?</Heading>

        <FormField
          name="question-1"
          type="number"
          value={groupsCount || ''}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
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
          name="question-2"
          type="number"
          value={regularlyUsedGroupsCount || ''}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
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
          name="question-3"
          type="number"
          value={smallestGroupMembersCount || ''}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
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
          name="question-4"
          type="number"
          value={largestGroupMembersCount || ''}
          onChange={event => {
            const { value } = event.target;

            setData(data => ({
              ...data,
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
            browserHistory.push('/explanation');
          }}
        />
      </Box>
    </Form>
  );
};

export default UsageStatistics;
