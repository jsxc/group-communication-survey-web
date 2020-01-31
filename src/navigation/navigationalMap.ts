import {
  Welcome,
  Demographic,
  Definition,
  Expectation,
  Usage,
  UsageStatistics,
  Explanation,
  FurtherExplanation,
  FirstChat,
  SecondChat,
  ThirdChat,
  FourthChat,
  FifthChat,
  ThankYou,
} from '../screens';

const navigationalMap = [
  { path: '/', screen: Welcome },
  { path: '/demographic', screen: Demographic },
  { path: '/definition', screen: Definition },
  { path: '/expectation', screen: Expectation },
  { path: '/usage', screen: Usage },
  { path: '/usage-statistics', screen: UsageStatistics },
  { path: '/explanation', screen: Explanation },
  { path: '/further-explanation', screen: FurtherExplanation },
  { path: '/chat-1', screen: FirstChat },
  { path: '/chat-2', screen: SecondChat },
  { path: '/chat-3', screen: ThirdChat },
  { path: '/chat-4', screen: FourthChat },
  { path: '/chat-5', screen: FifthChat },
  { path: '/thank-you', screen: ThankYou },
];

export default navigationalMap;
