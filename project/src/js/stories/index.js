import branch from './branch';

export default {
  question: '有人在吗，看的到这条消息吗？',
  answers: [
    {
      value: '1',
      answer: '你是在跟我说话？',
      next: branch,
    },
    {
      value: '2',
      answer: '嗯……你好',
      next: branch,
    },
  ],
};
