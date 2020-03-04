import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type Data = {
  'What is your name?': string;
  'Specify your sex:': string;
  'How old are you?': number;
  'Which region are you from?': string;
  'What do you think are properties that define group communication?': string;
  'What are you expecting from a digital group?': string;
  'Do you use group chat clients such as WhatsApp?': string;
  'How many groups do you have?': number;
  'How many groups do you use regularly?': number;
  'How many members does the smallest group have?': number;
  'How many members does the largest group have?': number;
  firstChatFeedback: {
    'How well did you understand the conversation?': string;
    'Did Lara watch the game?': string;
  };
  secondChatFeedback: {
    'How well did you understand the conversation?': string;
    'Is Arthur alright?': string;
    'Does Arthur know the other driver involved in the accident?': string;
  };
  thirdChatFeedback: {
    'How well did you understand the conversation?': string;
    'Did Karl prepare the presentation?': string;
    'Did Karl prepare the invitation?': string;
  };
  fourthChatFeedback: {
    'How well did you understand the conversation?': string;
    'Will Emil be lent money?': string;
  };
  fifthChatFeedback: {
    'How well did you understand the conversation?': string;
    'How many people reported sick?': string;
    'Is the day going smoothly?': string;
  };
  'What do you think of the new representations?': string;
};

type Navigation = {
  hasStarted: boolean;
};

type State = {
  data: Data;
  navigation: Navigation;
};

type Actions = {
  setData: Dispatch<SetStateAction<Data>>;
  setNavigation: Dispatch<SetStateAction<Navigation>>;
};

const GlobalStateContext = createContext<[State, Actions]>([
  {
    data: {
      'What is your name?': null,
      'Specify your sex:': null,
      'How old are you?': null,
      'Which region are you from?': null,
      'What do you think are properties that define group communication?': null,
      'What are you expecting from a digital group?': null,
      'Do you use group chat clients such as WhatsApp?': null,
      'How many groups do you have?': null,
      'How many groups do you use regularly?': null,
      'How many members does the smallest group have?': null,
      'How many members does the largest group have?': null,
      firstChatFeedback: {
        'How well did you understand the conversation?': null,
        'Did Lara watch the game?': null,
      },
      secondChatFeedback: {
        'How well did you understand the conversation?': null,
        'Is Arthur alright?': null,
        'Does Arthur know the other driver involved in the accident?': null,
      },
      thirdChatFeedback: {
        'How well did you understand the conversation?': null,
        'Did Karl prepare the presentation?': null,
        'Did Karl prepare the invitation?': null,
      },
      fourthChatFeedback: {
        'How well did you understand the conversation?': null,
        'Will Emil be lent money?': null,
      },
      fifthChatFeedback: {
        'How well did you understand the conversation?': null,
        'How many people reported sick?': null,
        'Is the day going smoothly?': null,
      },
      'What do you think of the new representations?': null,
    },
    navigation: {
      hasStarted: false,
    },
  },
  {
    setData: () => {},
    setNavigation: () => {},
  },
]);

export const GlobalStateProvider: React.FC = props => {
  const { children } = props;

  const [data, setData] = useState<Data>({
    'What is your name?': null,
    'Specify your sex:': null,
    'How old are you?': null,
    'Which region are you from?': null,
    'What do you think are properties that define group communication?': null,
    'What are you expecting from a digital group?': null,
    'Do you use group chat clients such as WhatsApp?': null,
    'How many groups do you have?': null,
    'How many groups do you use regularly?': null,
    'How many members does the smallest group have?': null,
    'How many members does the largest group have?': null,
    firstChatFeedback: {
      'How well did you understand the conversation?': null,
      'Did Lara watch the game?': null,
    },
    secondChatFeedback: {
      'How well did you understand the conversation?': null,
      'Is Arthur alright?': null,
      'Does Arthur know the other driver involved in the accident?': null,
    },
    thirdChatFeedback: {
      'How well did you understand the conversation?': null,
      'Did Karl prepare the presentation?': null,
      'Did Karl prepare the invitation?': null,
    },
    fourthChatFeedback: {
      'How well did you understand the conversation?': null,
      'Will Emil be lent money?': null,
    },
    fifthChatFeedback: {
      'How well did you understand the conversation?': null,
      'How many people reported sick?': null,
      'Is the day going smoothly?': null,
    },
    'What do you think of the new representations?': null,
  });

  const [navigation, setNavigation] = useState<Navigation>({
    hasStarted: false,
  });

  const state: State = {
    data,
    navigation,
  };

  const actions: Actions = {
    setData,
    setNavigation,
  };

  return (
    <GlobalStateContext.Provider value={[state, actions]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): [State, Actions] => {
  return useContext<[State, Actions]>(GlobalStateContext);
};
