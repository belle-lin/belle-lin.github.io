import branch from './branch';

export default {
  question:
    '太好了，终于有人回应我了！先告诉你一件事情，千万不要自己说出那个词，要让别人来说。',
  answers: [
    {
      value: '11',
      answer: '那个词，你说的是什么词？',
      next: branch,
    },
    {
      value: '12',
      answer: '你是谁？',
      next: {
        question: '我只是一个孤独的人，这个不重要，重要的是那个词。',
        answers: [
          {
            value: '121',
            answer: '勾起我的好奇心了，到底是什么词？',
            next: branch,
          },
          {
            value: '122',
            answer: '不会是一句咒语吧？',
            next: branch,
          },
        ],
      },
    },
  ],
};
