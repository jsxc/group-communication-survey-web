import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

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
  firstChatFeedback: [number, number];
  secondChatFeedback: [number, number, number];
  thirdChatFeedback: [number, number, number];
  fourthChatFeedback: [number, number];
  fifthChatFeedback: [number, number, number];
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
