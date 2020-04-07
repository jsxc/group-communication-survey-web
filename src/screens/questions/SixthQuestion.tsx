import React, { useState } from 'react';
import { Box, Form, FormField, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { Heading, RadioButtonGroup, ErrorText } from '../../components';
import { useGlobalState } from '../../hooks';
import { isNull } from '../../utilities';

const SixthQuestion: React.FC = () => {
  const browserHistory = useHistory();
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = useState({
    hasGroupsCountBeenBlurred: false,
    hasRegularlyUsedGroupsCountBeenBlurred: false,
    hasSmallestGroupMembersCountBeenBlurred: false,
    hasLargestGroupMembersCountBeenBlurred: false,
  });

  const { data } = globalState;
  const { setData } = globalActions;

  const {
    'Which is your favorite digital group chat messenger?': favoriteChatApp,
    'Which digital group chat messenger do you use most?': mostUsedChatApp,
    'How many groups do you have?': groupsCount,
    'How many groups do you use regularly?': regularlyUsedGroupsCount,
    'How many members does the smallest group have?': smallestGroupMembersCount,
    'How many members does the largest group have?': largestGroupMembersCount,
  } = data;
  const {
    hasGroupsCountBeenBlurred,
    hasRegularlyUsedGroupsCountBeenBlurred,
    hasSmallestGroupMembersCountBeenBlurred,
    hasLargestGroupMembersCountBeenBlurred,
  } = state;

  const setFavoriteChatApp = (favoriteChatApp: string) => {
    return setData((data) => ({
      ...data,
      'Which is your favorite digital group chat messenger?': favoriteChatApp,
    }));
  };

  const setMostUsedChatApp = (mostUsedChatApp: string) => {
    return setData((data) => ({
      ...data,
      'Which digital group chat messenger do you use most?': mostUsedChatApp,
    }));
  };

  const setGroupsCount = (groupsCount: number) => {
    return setData((data) => ({
      ...data,
      'How many groups do you have?': groupsCount,
    }));
  };

  const setRegularlyUsedGroupsCount = (regularlyUsedGroupsCount: number) => {
    return setData((data) => ({
      ...data,
      'How many groups do you use regularly?': regularlyUsedGroupsCount,
    }));
  };

  const setSmallestGroupMembersCount = (smallestGroupMembersCount: number) => {
    return setData((data) => ({
      ...data,
      'How many members does the smallest group have?': smallestGroupMembersCount,
    }));
  };

  const setLargestGroupMembersCount = (largestGroupMembersCount: number) => {
    return setData((data) => ({
      ...data,
      'How many members does the largest group have?': largestGroupMembersCount,
    }));
  };

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
    [favoriteChatApp, mostUsedChatApp].some(isNull) ||
    [
      groupsCountFieldError,
      regularlyUsedGroupsCountFieldError,
      smallestGroupMembersCountFieldError,
      largestGroupMembersCountFieldError,
    ].some(Boolean);

  return (
    <Form>
      <Box margin="medium">
        <Heading level="4" error={isNull(favoriteChatApp)}>
          Which is your favorite digital group chat messenger?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          other={true}
          options={['WhatsApp', 'Threema', 'Telegram', 'Signal', 'XMPP']}
          value={favoriteChatApp}
          onChange={(event) => {
            const { value } = event.target;
            setFavoriteChatApp(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={isNull(mostUsedChatApp)}>
          Which digital group chat messenger do you use most?
        </Heading>

        <RadioButtonGroup
          name="question-4"
          other={true}
          options={['WhatsApp', 'Threema', 'Telegram', 'Signal', 'XMPP']}
          value={mostUsedChatApp}
          onChange={(event) => {
            const { value } = event.target;
            setMostUsedChatApp(value);
          }}
        />
      </Box>

      <Box margin="medium">
        <Heading level="4" error={Boolean(groupsCountFieldError)}>
          How many groups do you have?
        </Heading>

        <FormField
          name="question-1"
          type="number"
          value={groupsCount || ''}
          onChange={(event) => {
            const { value } = event.target;
            setGroupsCount(value ? parseInt(value) : null);
          }}
          onBlur={() => {
            setState((state) => ({
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
        <Heading level="4" error={Boolean(regularlyUsedGroupsCountFieldError)}>
          How many groups do you use regularly?
        </Heading>

        <FormField
          name="question-2"
          type="number"
          value={regularlyUsedGroupsCount || ''}
          onChange={(event) => {
            const { value } = event.target;
            setRegularlyUsedGroupsCount(value ? parseInt(value) : null);
          }}
          onBlur={() => {
            setState((state) => ({
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
        <Heading level="4" error={Boolean(smallestGroupMembersCountFieldError)}>
          How many members does the smallest group have?
        </Heading>

        <FormField
          name="question-3"
          type="number"
          value={smallestGroupMembersCount || ''}
          onChange={(event) => {
            const { value } = event.target;
            setSmallestGroupMembersCount(value ? parseInt(value) : null);
          }}
          onBlur={() => {
            setState((state) => ({
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
        <Heading level="4" error={Boolean(largestGroupMembersCountFieldError)}>
          How many members does the largest group have?
        </Heading>

        <FormField
          name="question-4"
          type="number"
          value={largestGroupMembersCount || ''}
          onChange={(event) => {
            const { value } = event.target;
            setLargestGroupMembersCount(value ? parseInt(value) : null);
          }}
          onBlur={() => {
            setState((state) => ({
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
            browserHistory.push('/questions/7');
          }}
        />
      </Box>
    </Form>
  );
};

export default SixthQuestion;
