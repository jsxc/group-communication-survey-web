import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import * as KEYS from './keys';

type Data = {
  [KEYS.FEEDBACK_MISSING_MSG_COHERENT]: string;
  [KEYS.FEEDBACK_MISSING_MSG_HELPFUL]: string;
  [KEYS.FEEDBACK_MISSING_MSG_INTEGRATION]: string;
  [KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT]: string;
  [KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL]: string;
  [KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION]: string;
  'What is your email address?': string;
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
  'What are you doing if you do not know someone in a group?': string;
  'Are you always knowing who will hear your message?': string;
  'Are you aware of that?': string;
  'In which cases is it especially important for you who will hear your messages?': string;
  'Would it be sometimes important for you that nobody in the group can prove that you said something?': string;
  'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': string;
  'Do you thing there are use cases in which plausible deniability of group membership is important?': string;
  'Would it influence your behaviour if everything you say would be immediately published?': string;
  'Are there special requirements for groups if confidential topics are discussed?': string;
  'Which statements are true for the admission of a new member in a business group?': {
    'Everyone can join': boolean;
    "It's ok if someone knows the new member": boolean;
    'I have to know the new member': boolean;
    'The new member has to be part of an organization or similar': boolean;
    "If I don't know the new member, I get to know him": boolean;
    'The new member is mostly invited/introduced by a member': boolean;
    'The new member is mostly requesting admission': boolean;
    'Before a new member is admitted into the group, this decision is discussed internally': boolean;
    "If I'm not satisfied with the new member I leave the group": boolean;
    "If I'm not satisfied with the new member I stop contributing": boolean;
  };
  'Which statements are true for the admission of a new member in a casual group?': {
    'Everyone can join': boolean;
    "It's ok if someone knows the new member": boolean;
    'I have to know the new member': boolean;
    'The new member has to be part of an organization or similar': boolean;
    "If I don't know the new member, I get to know him": boolean;
    'The new member is mostly invited/introduced by a member': boolean;
    'The new member is mostly requesting admission': boolean;
    'Before a new member is admitted into the group, this decision is discussed internally': boolean;
    "If I'm not satisfied with the new member I leave the group": boolean;
    "If I'm not satisfied with the new member I stop contributing": boolean;
  };
  'Which statements are true for the admission of a new member in a confidential group?': {
    'Everyone can join': boolean;
    "It's ok if someone knows the new member": boolean;
    'I have to know the new member': boolean;
    'The new member has to be part of an organization or similar': boolean;
    "If I don't know the new member, I get to know him": boolean;
    'The new member is mostly invited/introduced by a member': boolean;
    'The new member is mostly requesting admission': boolean;
    'Before a new member is admitted into the group, this decision is discussed internally': boolean;
    "If I'm not satisfied with the new member I leave the group": boolean;
    "If I'm not satisfied with the new member I stop contributing": boolean;
  };
  "How do you react if a new person joins a group that you don't like?": string;
  'Do you use programs that allow you to communicate with groups?': string;
  'Which is your favorite digital group chat messenger?': string;
  'Which digital group chat messenger do you use most?': string;
  'How many groups do you have?': number;
  'How many groups do you use regularly?': number;
  'How many members does the smallest group have?': number;
  'How many members does the largest group have?': number;
  'Do you expect that everyone reads your message in a group chat?': string;
  'Do you thing everyone is reading all your messages in a group chat?': string;
  'Are you always reading all messages in a group chat?': string;
  'Would you publish all your conversations in your favorite group chat app?': string;
  'Would you publish a complete list of groups you are part of in your favorite group chat app?': string;
  'How do you react if a new member joins a group of good friends/business group/club group?': string;
  "What is your most common reaction if a new member, which you don't like, is added to a group?": string;
  "What is your most common reaction if you are added to a group which you don't like to be part of?": string;
  'How often does this happen?': string;
  "What are you doing if you don't want to participate in a digital group?": string;
  'Which visualization would you like to have integrated in your favorite chat app?': string;
  'Which feature are you missing in your favorite chat app?': string;
  firstChatFeedback: {
    'How well did you understand the conversation?': string;
    'Did you notice something?': string;
  };
  secondChatFeedback: {
    'How well did you understand the conversation?': string;
    'Could you explain the purpose of the added chat elements shown in screenshot #1?': string;
    'Could you explain the purpose of the added chat elements shown in screenshot #2?': string;
  };
  thirdChatFeedback: {
    'How well did you understand the conversation?': string;
    [KEYS.FEEDBACK_TREE_CONTEXT]: string;
    [KEYS.FEEDBACK_TREE_COMPARISON]: string;
  };
  fourthChatFeedback: {
    'How well did you understand the conversation?': string;
    [KEYS.FEEDBACK_TAB_CONTEXT_INFERRED]: string;
    [KEYS.FEEDBACK_TAB_CONTEXT_TREE]: string;
    [KEYS.FEEDBACK_TAB_COMPARISON]: string;
  };
  'Is there a feature or visualisation which you miss in your favorite chat app?': string;
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
      [KEYS.FEEDBACK_MISSING_MSG_COHERENT]: null,
      [KEYS.FEEDBACK_MISSING_MSG_HELPFUL]: null,
      [KEYS.FEEDBACK_MISSING_MSG_INTEGRATION]: null,
      [KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT]: null,
      [KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL]: null,
      [KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION]: null,
      'What is your email address?': null,
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
      'What are you doing if you do not know someone in a group?': null,
      'Are you always knowing who will hear your message?': null,
      'Are you aware of that?': null,
      'In which cases is it especially important for you who will hear your messages?': null,
      'Would it be sometimes important for you that nobody in the group can prove that you said something?': null,
      'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': null,
      'Do you thing there are use cases in which plausible deniability of group membership is important?': null,
      'Would it influence your behaviour if everything you say would be immediately published?': null,
      'Are there special requirements for groups if confidential topics are discussed?': null,
      'Which statements are true for the admission of a new member in a business group?': {
        'Everyone can join': false,
        "It's ok if someone knows the new member": false,
        'I have to know the new member': false,
        'The new member has to be part of an organization or similar': false,
        "If I don't know the new member, I get to know him": false,
        'The new member is mostly invited/introduced by a member': false,
        'The new member is mostly requesting admission': false,
        'Before a new member is admitted into the group, this decision is discussed internally': false,
        "If I'm not satisfied with the new member I leave the group": false,
        "If I'm not satisfied with the new member I stop contributing": false,
      },
      'Which statements are true for the admission of a new member in a casual group?': {
        'Everyone can join': false,
        "It's ok if someone knows the new member": false,
        'I have to know the new member': false,
        'The new member has to be part of an organization or similar': false,
        "If I don't know the new member, I get to know him": false,
        'The new member is mostly invited/introduced by a member': false,
        'The new member is mostly requesting admission': false,
        'Before a new member is admitted into the group, this decision is discussed internally': false,
        "If I'm not satisfied with the new member I leave the group": false,
        "If I'm not satisfied with the new member I stop contributing": false,
      },
      'Which statements are true for the admission of a new member in a confidential group?': {
        'Everyone can join': false,
        "It's ok if someone knows the new member": false,
        'I have to know the new member': false,
        'The new member has to be part of an organization or similar': false,
        "If I don't know the new member, I get to know him": false,
        'The new member is mostly invited/introduced by a member': false,
        'The new member is mostly requesting admission': false,
        'Before a new member is admitted into the group, this decision is discussed internally': false,
        "If I'm not satisfied with the new member I leave the group": false,
        "If I'm not satisfied with the new member I stop contributing": false,
      },
      "How do you react if a new person joins a group that you don't like?": null,
      'Do you use programs that allow you to communicate with groups?': null,
      'Which is your favorite digital group chat messenger?': null,
      'Which digital group chat messenger do you use most?': null,
      'How many groups do you have?': null,
      'How many groups do you use regularly?': null,
      'How many members does the smallest group have?': null,
      'How many members does the largest group have?': null,
      'Do you expect that everyone reads your message in a group chat?': null,
      'Do you thing everyone is reading all your messages in a group chat?': null,
      'Are you always reading all messages in a group chat?': null,
      'Would you publish all your conversations in your favorite group chat app?': null,
      'Would you publish a complete list of groups you are part of in your favorite group chat app?': null,
      'How do you react if a new member joins a group of good friends/business group/club group?': null,
      "What is your most common reaction if a new member, which you don't like, is added to a group?": null,
      "What is your most common reaction if you are added to a group which you don't like to be part of?": null,
      'How often does this happen?': null,
      "What are you doing if you don't want to participate in a digital group?": null,
      'Which visualization would you like to have integrated in your favorite chat app?': null,
      'Which feature are you missing in your favorite chat app?': null,
      firstChatFeedback: {
        'How well did you understand the conversation?': null,
        'Did you notice something?': null,
      },
      secondChatFeedback: {
        'How well did you understand the conversation?': null,
        'Could you explain the purpose of the added chat elements shown in screenshot #1?': null,
        'Could you explain the purpose of the added chat elements shown in screenshot #2?': null,
      },
      thirdChatFeedback: {
        'How well did you understand the conversation?': null,
        [KEYS.FEEDBACK_TREE_CONTEXT]: null,
        [KEYS.FEEDBACK_TREE_COMPARISON]: null,
      },
      fourthChatFeedback: {
        'How well did you understand the conversation?': null,
        [KEYS.FEEDBACK_TAB_CONTEXT_INFERRED]: null,
        [KEYS.FEEDBACK_TAB_CONTEXT_TREE]: null,
        [KEYS.FEEDBACK_TAB_COMPARISON]: null,
      },
      'Is there a feature or visualisation which you miss in your favorite chat app?': null,
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

export const GlobalStateProvider: React.FC = (props) => {
  const { children } = props;

  const [data, setData] = useState<Data>({
    [KEYS.FEEDBACK_MISSING_MSG_COHERENT]: null,
    [KEYS.FEEDBACK_MISSING_MSG_HELPFUL]: null,
    [KEYS.FEEDBACK_MISSING_MSG_INTEGRATION]: null,
    [KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT]: null,
    [KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL]: null,
    [KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION]: null,
    'What is your email address?': null,
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
    'What are you doing if you do not know someone in a group?': null,
    'Are you always knowing who will hear your message?': null,
    'Are you aware of that?': null,
    'In which cases is it especially important for you who will hear your messages?': null,
    'Would it be sometimes important for you that nobody in the group can prove that you said something?': null,
    'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': null,
    'Do you thing there are use cases in which plausible deniability of group membership is important?': null,
    'Would it influence your behaviour if everything you say would be immediately published?': null,
    'Are there special requirements for groups if confidential topics are discussed?': null,
    'Which statements are true for the admission of a new member in a business group?': {
      'Everyone can join': false,
      "It's ok if someone knows the new member": false,
      'I have to know the new member': false,
      'The new member has to be part of an organization or similar': false,
      "If I don't know the new member, I get to know him": false,
      'The new member is mostly invited/introduced by a member': false,
      'The new member is mostly requesting admission': false,
      'Before a new member is admitted into the group, this decision is discussed internally': false,
      "If I'm not satisfied with the new member I leave the group": false,
      "If I'm not satisfied with the new member I stop contributing": false,
    },
    'Which statements are true for the admission of a new member in a casual group?': {
      'Everyone can join': false,
      "It's ok if someone knows the new member": false,
      'I have to know the new member': false,
      'The new member has to be part of an organization or similar': false,
      "If I don't know the new member, I get to know him": false,
      'The new member is mostly invited/introduced by a member': false,
      'The new member is mostly requesting admission': false,
      'Before a new member is admitted into the group, this decision is discussed internally': false,
      "If I'm not satisfied with the new member I leave the group": false,
      "If I'm not satisfied with the new member I stop contributing": false,
    },
    'Which statements are true for the admission of a new member in a confidential group?': {
      'Everyone can join': false,
      "It's ok if someone knows the new member": false,
      'I have to know the new member': false,
      'The new member has to be part of an organization or similar': false,
      "If I don't know the new member, I get to know him": false,
      'The new member is mostly invited/introduced by a member': false,
      'The new member is mostly requesting admission': false,
      'Before a new member is admitted into the group, this decision is discussed internally': false,
      "If I'm not satisfied with the new member I leave the group": false,
      "If I'm not satisfied with the new member I stop contributing": false,
    },
    "How do you react if a new person joins a group that you don't like?": null,
    'Do you use programs that allow you to communicate with groups?': null,
    'Which is your favorite digital group chat messenger?': null,
    'Which digital group chat messenger do you use most?': null,
    'How many groups do you have?': null,
    'How many groups do you use regularly?': null,
    'How many members does the smallest group have?': null,
    'How many members does the largest group have?': null,
    'Do you expect that everyone reads your message in a group chat?': null,
    'Do you thing everyone is reading all your messages in a group chat?': null,
    'Are you always reading all messages in a group chat?': null,
    'Would you publish all your conversations in your favorite group chat app?': null,
    'Would you publish a complete list of groups you are part of in your favorite group chat app?': null,
    'How do you react if a new member joins a group of good friends/business group/club group?': null,
    "What is your most common reaction if a new member, which you don't like, is added to a group?": null,
    "What is your most common reaction if you are added to a group which you don't like to be part of?": null,
    'How often does this happen?': null,
    "What are you doing if you don't want to participate in a digital group?": null,
    'Which visualization would you like to have integrated in your favorite chat app?': null,
    'Which feature are you missing in your favorite chat app?': null,
    firstChatFeedback: {
      'How well did you understand the conversation?': null,
      'Did you notice something?': null,
    },
    secondChatFeedback: {
      'How well did you understand the conversation?': null,
      'Could you explain the purpose of the added chat elements shown in screenshot #1?': null,
      'Could you explain the purpose of the added chat elements shown in screenshot #2?': null,
    },
    thirdChatFeedback: {
      'How well did you understand the conversation?': null,
      [KEYS.FEEDBACK_TREE_CONTEXT]: null,
      [KEYS.FEEDBACK_TREE_COMPARISON]: null,
    },
    fourthChatFeedback: {
      'How well did you understand the conversation?': null,
      [KEYS.FEEDBACK_TAB_CONTEXT_INFERRED]: null,
      [KEYS.FEEDBACK_TAB_CONTEXT_TREE]: null,
      [KEYS.FEEDBACK_TAB_COMPARISON]: null,
    },
    'Is there a feature or visualisation which you miss in your favorite chat app?': null,
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
