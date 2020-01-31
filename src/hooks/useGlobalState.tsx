import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type Data = {
  isMale: boolean | null;
  age: number | null;
  region: string | null;
  definition: string | null;
  expectation: string | null;
  usesGroupChatClient: boolean | null;
  groupsCount: number | null;
  regularlyUsedGroupsCount: number | null;
  smallestGroupMembersCount: number | null;
  largestGroupMembersCount: number | null;
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
