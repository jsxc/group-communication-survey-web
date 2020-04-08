export type ChatMode = 'REGULAR' | 'TREE' | 'DRAWER';

export type MessageContent = {
  id: string;
  text: string;
  author: User | 'SYSTEM';
  createdAt: Date;
  inferenceQuote?: string;
  replyTo?: string;
};

export type User = {
  name: string;
  avatar: string;
};
