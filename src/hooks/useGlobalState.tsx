import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type ChatFeedback = number[];

type Data = {
  name: string;
  isMale: boolean;
  age: number;
  region: string;
  definition: string;
  expectation: string;
  usesGroupChatClient: boolean;
  groupsCount: number;
  regularlyUsedGroupsCount: number;
  smallestGroupMembersCount: number;
  largestGroupMembersCount: number;
  firstChatFeedback: ChatFeedback;
  secondChatFeedback: ChatFeedback;
  thirdChatFeedback: ChatFeedback;
  fourthChatFeedback: ChatFeedback;
  fifthChatFeedback: ChatFeedback;
  opinionOnRepresentations: string;
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
      name: null,
      isMale: null,
      age: null,
      region: null,
      definition: null,
      expectation: null,
      usesGroupChatClient: null,
      groupsCount: null,
      regularlyUsedGroupsCount: null,
      smallestGroupMembersCount: null,
      largestGroupMembersCount: null,
      firstChatFeedback: [null, null],
      secondChatFeedback: [null, null, null],
      thirdChatFeedback: [null, null, null],
      fourthChatFeedback: [null, null],
      fifthChatFeedback: [null, null, null],
      opinionOnRepresentations: null,
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
    name: null,
    isMale: null,
    age: null,
    region: null,
    definition: null,
    expectation: null,
    usesGroupChatClient: null,
    groupsCount: null,
    regularlyUsedGroupsCount: null,
    smallestGroupMembersCount: null,
    largestGroupMembersCount: null,
    firstChatFeedback: [null, null],
    secondChatFeedback: [null, null, null],
    thirdChatFeedback: [null, null, null],
    fourthChatFeedback: [null, null],
    fifthChatFeedback: [null, null, null],
    opinionOnRepresentations: null,
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
