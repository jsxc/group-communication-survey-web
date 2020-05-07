import users from './users';
import { randomId } from '../../../utilities';

interface ConversationEntry {
  text: string;
  ref?: string;
  label: string;
  user: string;
  userId: number;
}

interface LogEntry {
  id: string;
  text: string;
  author:
    | {
        name: string;
        avatar: string;
      }
    | 'SYSTEM';
  createdAt: Date;
  replyTo?: string;
  inferenceQuote?: string;
}

const carConversation = [
  {
    text: 'Hi friends, can someone pick me up tomorrow?',
    label: 'label-0',
    user: 'Doris',
    userId: 2,
  },
  {
    text: "What's going on?",
    label: 'label-1',
    ref: 'label-0',
    user: 'Karl',
    userId: 0,
  },
  {
    text: 'You always take the car',
    label: 'label-2',
    ref: 'label-1',
    user: 'Karl',
    userId: 0,
  },
  {
    text: 'Is everything fine?',
    label: 'label-3',
    ref: 'label-2',
    user: 'Lara',
    userId: 1,
  },
  {
    text: 'Oh well, silly story 😂',
    label: 'label-4',
    ref: 'label-3',
    user: 'Doris',
    userId: 2,
  },
  {
    text: 'There was a discussion between a tractor and my car',
    label: 'label-5',
    ref: 'label-4',
    user: 'Doris',
    userId: 2,
  },
  {
    text: '???',
    label: 'label-6',
    ref: 'label-5',
    user: 'Lara',
    userId: 1,
  },
  {
    text: '😂 Oh dear',
    label: 'label-7',
    ref: 'label-6',
    user: 'Karl',
    userId: 0,
  },
  {
    text: 'The tractor cut a corner where my car was parked',
    label: 'label-8',
    ref: 'label-7',
    user: 'Doris',
    userId: 2,
  },
  {
    text: 'Do you know who drove the tractor?',
    label: 'label-11',
    ref: 'label-10',
    user: 'Karl',
    userId: 0,
  },
  {
    text: 'Yea, sure',
    label: 'label-10',
    ref: 'label-9',
    user: 'Doris',
    userId: 2,
  },
  {
    text: 'But you are fine?',
    label: 'label-9-0',
    ref: 'label-8',
    user: 'Lara',
    userId: 1,
  },
  {
    text: 'Aaahhh. That is not good.',
    label: 'label-9-1',
    ref: 'label-9-0',
    user: 'Karl',
    userId: 0,
  },
  {
    text: 'I am soooo sorry for you',
    label: 'label-9',
    ref: 'label-9-1',
    user: 'Bernhardt',
    userId: 3,
  },
  {
    text: 'Nope',
    label: 'label-12',
    ref: 'label-11',
    user: 'Doris',
    userId: 2,
  },
  {
    text: "That's bad. I'm sorry for you.",
    label: 'label-13',
    ref: 'label-12',
    user: 'Lara',
    userId: 1,
  },
];

function generateLog(
  conversation: ConversationEntry[],
  isNew: boolean,
  variant: 'replyTo' | 'inferenceQuote',
): LogEntry[] {
  let map: { [label: string]: ConversationEntry } = {};
  let log: LogEntry[] = [];

  conversation.forEach((c, index) => {
    map[c.label] = c;

    if (isNew && variant === 'inferenceQuote' && c.ref && !map[c.ref]) {
      log.push({
        id: randomId(),
        text: 'One or more messages are missing',
        author: 'SYSTEM' as const,
        createdAt: new Date(
          `2020-01-30T20:${
            log.length < 10 ? '0' + log.length.toString() : log.length
          }:00`,
        ),
      });
    }

    log.push({
      id: randomId(),
      text: c.text,
      author: users[c.user.toLowerCase()],
      createdAt: new Date(
        `2020-01-30T20:${
          log.length < 10 ? '0' + log.length.toString() : log.length
        }:00`,
      ),
      [variant]:
        isNew && c.ref && c.ref !== conversation[index - 1].label && map[c.ref]
          ? map[c.ref].text
          : undefined,
    });
  });

  return log;
}

export const firstChatMessages = generateLog(
  carConversation,
  false,
  'inferenceQuote',
);
export const secondChatMessages = generateLog(
  carConversation,
  true,
  'inferenceQuote',
);
export const thirdChatMessages = generateLog(carConversation, true, 'replyTo');
export const fourthChatMessages = generateLog(carConversation, true, 'replyTo');
