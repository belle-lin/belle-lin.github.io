import branch from './branch';

export default {
  question: '先告诉我，你朋友多吗？家人多吗？',
  answers: [
    {
      value: '111',
      answer: '我人缘很好，朋友很多，这个网站就是朋友告诉我的',
      next: branch,
    },
    {
      value: '112',
      answer: '为什么要知道这个，这是个骗局吗',
      next: {
        question: '一个谨慎的家伙，小心总是没错的，只是你不用防备我。',
        answers: [
          {
            value: '1121',
            answer: '防人之心不可无，我有朋友也有家人。',
            next: branch,
          },
          {
            value: '1122',
            answer: '你肯定是一个死骗子。',
            ending: '你暗自庆幸差点掉入一个骗局，但是冥冥之中也许错过了些什么东西。'
          },
        ],
      },
    },
  ],
};
