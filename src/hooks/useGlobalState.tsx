import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type ChatFeedback = number[];

type Data = {
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
};

type State = {
  data: Data;
};

type Actions = {
  setData: Dispatch<SetStateAction<Data>>;
};

const GlobalStateContext = createContext<[State, Actions]>([
  {
    data: {
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
    },
  },
  {
    setData: () => {},
  },
]);

export const GlobalStateProvider: React.FC = props => {
  const { children } = props;

  const [data, setData] = useState<Data>({
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
  });

  const state: State = {
    data,
  };

  const actions: Actions = {
    setData,
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
