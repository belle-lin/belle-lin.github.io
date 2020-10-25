import branch from './branch';

export default {
  question:
    '看来总是有人簇拥着你，幸运的人，而我一直是一个人，没有朋友，没有家人。',
  answers: [
    {
      value: '1111',
      answer: '至少现在有我在跟你聊天不是吗。',
      next: branch,
    },
    {
      value: '1112',
      answer: '我有一个不错的提议，能帮你打发走寂寞无聊。',
      next: {
        question: '哦？不妨说说看呢？',
        answers: [
          {
            value: '11121',
            answer: '看电视，我就很喜欢看电视，杀时间的好办法。',
            next: {
              question:
                '我这边可没有什么电视，而且我猜你那边也没有什么有趣的节目吧。',
              answers: [
                {
                  value: '111211',
                  answer: '打发时间而已，我不怎么挑，现在跟我聊天也能解解闷。',
                  next: branch,
                },
              ],
            },
          },
          {
            value: '11122',
            answer: '你知道围棋吗？',
            ending:
              '对方并不想跟你聊这个，强行断开了连接，所以不要轻易跟别人提围棋？',
          },
        ],
      },
    },
  ],
};
