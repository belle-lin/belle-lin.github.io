import branch from './branch';

export default {
  question:
    '谢谢你，陌生人，顺着网线我感觉到温暖了。回归主题，那个词很神奇，别人说出来就是欢喜的，自己说出来就特别落寞。',
  answers: [
    {
      value: '11111',
      answer: '别卖关子了，可以说了吗，我可陪你好久了。',
      next: branch,
    },
    {
      value: '11112',
      answer: '能让我先猜一下吗？',
      next: {
        question: '可以啊，我们有的是时间，你猜猜看？',
        answers: [
          {
            value: '111121',
            answer:
              '“我爱你”，自己说出来就是向别人表白，主动权在别人，别人说出来主动权就在自己手上了。',
            next: {
              question: '有点道理，不过不对',
              answers: [
                {
                  value: '1111211',
                  answer: '那你来说答案吧',
                  next: branch,
                },
              ],
            },
          },
          {
            value: '111122',
            answer: '“对不起”，永远都是别人向自己道歉的时候比较好吧。',
            next: {
              question: '有点道理，不过不对',
              answers: [
                {
                  value: '1111221',
                  answer: '那你来说答案吧',
                  next: branch,
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
