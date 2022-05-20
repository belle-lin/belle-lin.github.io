import tabDuorouImg from 'assets/images/tab-duorou.png';
import tabHapiImg from 'assets/images/tab-hapi.png';

export const initState = {
  loading: true,
  // 当前月份
  currentDay: 0,
  dayProgress: 0,

  hungryProgress: 0,
  hungryAdd: 1,

  autoFeed: true,

  // 导航栏配置
  tabList: [
    {
      id: 'duorou',
      icon: tabDuorouImg,
      text: '多肉',
      dayLimit: 0,
      active: true,
    },
    {
      id: 'hapi',
      icon: tabHapiImg,
      text: '哈啤',
      dayLimit: 0,
      active: false,
    },
  ],

  hapiList: [
    {
      text: '你动作太慢了（快速泡奶粉）！',
      spend: 5,
      field: 'hungryAdd',
      changeTo: 2,
      active: false,
    },
    {
      text: '还是太慢（最快速泡奶粉）！',
      spend: 10,
      field: 'hungryAdd',
      changeTo: 3,
      active: false,
    },
    {
      text: '喂奶什么的让我来（自动喂奶）！',
      spend: 20,
      field: 'autoFeed',
      changeTo: true,
      active: false,
    },
  ],
};

export const reducer = (state, { payload }) => {
  return {
    ...state,
    ...payload,
  };
};
