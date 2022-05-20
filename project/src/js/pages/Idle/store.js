import tabDuorouImg from 'assets/images/tab-duorou.png';
import tabHapiImg from 'assets/images/tab-hapi.png';

export const initState = {
  loading: true,
  // 当前月份
  currentDay: 0,
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
      dayLimit: 90,
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
