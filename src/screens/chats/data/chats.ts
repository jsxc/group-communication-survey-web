import users from './users';
import { randomId } from '../../../utilities';

const {
  karl,
  lara,
  arthur,
  emil,
  tim,
  ines,
  richard,
  bernhardt,
  carla,
  doris,
} = users;

export const firstChatMessages = [
  {
    text: 'Did you watch the game yesterday?',
    author: karl,
    createdAt: new Date('2020-01-30T20:00:00'),
  },
  {
    text: '👍',
    author: lara,
    createdAt: new Date('2020-01-30T20:02:00'),
  },
  {
    text: 'Was out yesterday',
    author: arthur,
    createdAt: new Date('2020-01-30T20:04:00'),
  },
  {
    text: 'That in Stuttgart',
    author: karl,
    createdAt: new Date('2020-01-30T20:05:00'),
  },
  {
    text: 'That was Hammer',
    author: karl,
    createdAt: new Date('2020-01-30T20:07:00'),
  },
  {
    text: 'Visited Ingo',
    author: arthur,
    createdAt: new Date('2020-01-30T20:08:00'),
  },
  {
    text: 'How is he?',
    author: lara,
    createdAt: new Date('2020-01-30T20:09:00'),
  },
  {
    text: 'Yes yes',
    author: karl,
    createdAt: new Date('2020-01-30T20:10:00'),
  },
  {
    text: 'Just ignore me',
    author: karl,
    createdAt: new Date('2020-01-30T20:11:00'),
  },
].map((message) => ({ ...message, id: randomId() }));

export const secondChatMessages = [
  {
    text: 'Did you watch the game yesterday?',
    author: karl,
    createdAt: new Date('2020-01-30T20:00:00'),
  },
  {
    text: 'One or more messages are missing',
    author: 'SYSTEM' as const,
    createdAt: new Date('2020-01-30T20:01:00'),
  },
  {
    text: '👍',
    author: lara,
    createdAt: new Date('2020-01-30T20:02:00'),
  },
  {
    text: 'One or more messages are missing',
    author: 'SYSTEM' as const,
    createdAt: new Date('2020-01-30T20:03:00'),
  },
  {
    text: 'Was out yesterday',
    author: arthur,
    createdAt: new Date('2020-01-30T20:04:00'),
  },
  {
    text: 'That in Stuttgart',
    author: karl,
    createdAt: new Date('2020-01-30T20:05:00'),
  },
  {
    text: 'One or more messages are missing',
    author: 'SYSTEM' as const,
    createdAt: new Date('2020-01-30T20:06:00'),
  },
  {
    text: 'That was Hammer',
    author: karl,
    createdAt: new Date('2020-01-30T20:07:00'),
  },
  {
    text: 'Visited Ingo',
    author: arthur,
    createdAt: new Date('2020-01-30T20:08:00'),
    inferenceQuote: '👍',
  },
  {
    text: 'How is he?',
    author: lara,
    createdAt: new Date('2020-01-30T20:09:00'),
  },
  {
    text: 'Yes yes',
    author: karl,
    createdAt: new Date('2020-01-30T20:10:00'),
  },
  {
    text: 'Just ignore me',
    author: karl,
    createdAt: new Date('2020-01-30T20:11:00'),
  },
].map((message) => ({ ...message, id: randomId() }));

export const thirdChatMessages = [
  {
    text: 'Karl, did you prepare the presentation?',
    author: ines,
    createdAt: new Date('2020-01-30T20:00:00'),
  },
  {
    text: 'I did it',
    author: karl,
    createdAt: new Date('2020-01-30T20:02:00'),
    replyTo: 'Karl, did you prepare the presentation?',
  },
  {
    text: 'Oh and what about the invitation?',
    author: ines,
    createdAt: new Date('2020-01-30T20:04:00'),
  },
  {
    text: 'Unfortunately I have not yet been able to do so',
    author: karl,
    createdAt: new Date('2020-01-30T20:05:00'),
    replyTo: 'Oh and what about the invitation?',
  },
  {
    text: 'Should I still do that?',
    author: richard,
    createdAt: new Date('2020-01-30T20:06:00'),
    replyTo: 'Oh and what about the invitation?',
  },
  {
    text: 'No, I can still manage it',
    author: karl,
    createdAt: new Date('2020-01-30T20:07:00'),
    replyTo: 'Oh and what about the invitation?',
  },
].map((message) => ({ ...message, id: randomId() }));

export const fourthChatMessages = [
  {
    text: 'I have to call in sick today',
    author: bernhardt,
    createdAt: new Date('2020-01-30T20:00:00'),
  },
  {
    text: 'You too?',
    author: carla,
    createdAt: new Date('2020-01-30T20:01:00'),
    replyTo: 'I have to call in sick today',
  },
  {
    text: 'Who else?',
    author: doris,
    createdAt: new Date('2020-01-30T20:02:00'),
    replyTo: 'I have to call in sick today',
  },
  {
    text: 'I thought you. No?',
    author: carla,
    createdAt: new Date('2020-01-30T20:03:00'),
    replyTo: 'I have to call in sick today',
  },
  {
    text: 'That would be new to me',
    author: doris,
    createdAt: new Date('2020-01-30T20:04:00'),
    replyTo: 'I have to call in sick today',
  },
  {
    text: 'Great, everything is going well today, right?',
    author: bernhardt,
    createdAt: new Date('2020-01-30T20:06:00'),
  },
  {
    text: 'Somehow it will work 😂',
    author: carla,
    createdAt: new Date('2020-01-30T20:07:00'),
    replyTo: 'Great, everything is going well today, right?',
  },
].map((message) => ({ ...message, id: randomId() }));

export const fifthChatMessages = [
  {
    text: 'I have to call in sick today',
    author: bernhardt,
    createdAt: new Date('2020-01-30T20:00:00'),
  },
  {
    text: 'You too?',
    author: carla,
    createdAt: new Date('2020-01-30T20:01:00'),
  },
  {
    text: 'Who else?',
    author: doris,
    createdAt: new Date('2020-01-30T20:02:00'),
  },
  {
    text: 'I thought you. No?',
    author: carla,
    createdAt: new Date('2020-01-30T20:03:00'),
  },
  {
    text: 'That would be new to me',
    author: doris,
    createdAt: new Date('2020-01-30T20:04:00'),
  },
  {
    text: 'One or more messages are missing',
    author: 'SYSTEM' as const,
    createdAt: new Date('2020-01-30T20:05:00'),
  },
  {
    text: 'Great, everything is going well today, right?',
    author: bernhardt,
    createdAt: new Date('2020-01-30T20:06:00'),
  },
  {
    text: 'Somehow it will work 😂',
    author: carla,
    createdAt: new Date('2020-01-30T20:07:00'),
  },
].map((message) => ({ ...message, id: randomId() }));
