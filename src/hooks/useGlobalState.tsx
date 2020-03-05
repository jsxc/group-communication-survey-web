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
  'Even if I am not allowed to talk, I always have the possibility to do so': string;
  'I am always able to hear everyone speaking': string;
  'I am always attentive during a discussion': string;
  'I always understand every statement acousticly and contentually': string;
  'I am never distracted during a discussion': string;
  'I always know who is talking': string;
  'I always know the person who is speaking': string;
  'I always know every participant in a group': string;
  'If there are no tapping devices a single member can not prove that someone said something': string;
  'If there are no tapping devices a single member can not prove that someone was a member of a specific group': string;
  'It is sometimes important that no member in a group can prove that someone said something': string;
  'Confidential private topics are only discussed in small groups': string;
  'I always leave a group with an announcement': string;
  'If I want to leave a group in my favorite chat app, I will always give a reason': string;
  'Are there cases where two or more people are talking at the same time?': string;
  'What is the result if two or more people are talking at the same time?': string;
  'What is the most common reaction if two or more people are talking at the same time?': string;
  'What do you thing are the most frequent reasons of distraction even if you are interested at some discussion?': string;
  'What are you doing if you are announcing something important?': string;
  'Imagine you were distracted and you are now unable to follow the conversation. How do you react?': string;
  'What is your most common reaction if a statement is unclear to you?': string;
  'What is your reaction if you were not able to understand something acousticly?': string;
  'Is there a difference in communication between business and leisure groups?': string;
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
      'Even if I am not allowed to talk, I always have the possibility to do so': null,
      'I am always able to hear everyone speaking': null,
      'I am always attentive during a discussion': null,
      'I always understand every statement acousticly and contentually': null,
      'I am never distracted during a discussion': null,
      'I always know who is talking': null,
      'I always know the person who is speaking': null,
      'I always know every participant in a group': null,
      'If there are no tapping devices a single member can not prove that someone said something': null,
      'If there are no tapping devices a single member can not prove that someone was a member of a specific group': null,
      'It is sometimes important that no member in a group can prove that someone said something': null,
      'Confidential private topics are only discussed in small groups': null,
      'I always leave a group with an announcement': null,
      'If I want to leave a group in my favorite chat app, I will always give a reason': null,
      'Are there cases where two or more people are talking at the same time?': null,
      'What is the result if two or more people are talking at the same time?': null,
      'What is the most common reaction if two or more people are talking at the same time?': null,
      'What do you thing are the most frequent reasons of distraction even if you are interested at some discussion?': null,
      'What are you doing if you are announcing something important?': null,
      'Imagine you were distracted and you are now unable to follow the conversation. How do you react?': null,
      'What is your most common reaction if a statement is unclear to you?': null,
      'What is your reaction if you were not able to understand something acousticly?': null,
      'Is there a difference in communication between business and leisure groups?': null,
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
    'Even if I am not allowed to talk, I always have the possibility to do so': null,
    'I am always able to hear everyone speaking': null,
    'I am always attentive during a discussion': null,
    'I always understand every statement acousticly and contentually': null,
    'I am never distracted during a discussion': null,
    'I always know who is talking': null,
    'I always know the person who is speaking': null,
    'I always know every participant in a group': null,
    'If there are no tapping devices a single member can not prove that someone said something': null,
    'If there are no tapping devices a single member can not prove that someone was a member of a specific group': null,
    'It is sometimes important that no member in a group can prove that someone said something': null,
    'Confidential private topics are only discussed in small groups': null,
    'I always leave a group with an announcement': null,
    'If I want to leave a group in my favorite chat app, I will always give a reason': null,
    'Are there cases where two or more people are talking at the same time?': null,
    'What is the result if two or more people are talking at the same time?': null,
    'What is the most common reaction if two or more people are talking at the same time?': null,
    'What do you thing are the most frequent reasons of distraction even if you are interested at some discussion?': null,
    'What are you doing if you are announcing something important?': null,
    'Imagine you were distracted and you are now unable to follow the conversation. How do you react?': null,
    'What is your most common reaction if a statement is unclear to you?': null,
    'What is your reaction if you were not able to understand something acousticly?': null,
    'Is there a difference in communication between business and leisure groups?': null,
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
