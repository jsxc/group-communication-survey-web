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

type Navigation = {
  currentPageIndex: number;
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
    navigation: {
      currentPageIndex: 0,
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

  const [navigation, setNavigation] = useState<Navigation>({
    currentPageIndex: 0,
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
