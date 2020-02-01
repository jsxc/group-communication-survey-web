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
  FirstChatFeedback,
  SecondChat,
  SecondChatFeedback,
  ThirdChat,
  ThirdChatFeedback,
  FourthChat,
  FourthChatFeedback,
  FifthChat,
  FifthChatFeedback,
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
  { path: '/chat-1-feedback', screen: FirstChatFeedback },
  { path: '/chat-2', screen: SecondChat },
  { path: '/chat-2-feedback', screen: SecondChatFeedback },
  { path: '/chat-3', screen: ThirdChat },
  { path: '/chat-3-feedback', screen: ThirdChatFeedback },
  { path: '/chat-4', screen: FourthChat },
  { path: '/chat-4-feedback', screen: FourthChatFeedback },
  { path: '/chat-5', screen: FifthChat },
  { path: '/chat-5-feedback', screen: FifthChatFeedback },
  { path: '/thank-you', screen: ThankYou },
];

export default navigationalMap;
