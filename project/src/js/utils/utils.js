import { Toast } from 'antd-mobile';

// 延迟
export const delay = (t) => new Promise((res) => setTimeout(res, t));

// 取url中参数
export const getUrlQuery = (name) => {
  if ((typeof name).toLowerCase() !== 'string') {
    console.error('name参数应该为string');
  }
  const search = window.location.search.substr(1);
  const query = search.split('&');
  let result;
  for (let i = 0; i < query.length; i += 1) {
    if (query[i].indexOf(`${name}=`) > -1) {
      const arr = query[i].split(`${name}=`);
      [, result] = arr;
      break;
    }
  }
  if (result) return result;
  return '';
};

export const getLS = (key) => {
  const ls = window.localStorage;
  if (ls.getItem(key)) {
    return ls.getItem(key);
  }
  return '';
};

export const setLS = (key, value) => {
  const ls = window.localStorage;
  ls.setItem(key, value);
};

export const removeLS = (key) => {
  const ls = window.localStorage;
  ls.removeItem(key);
};

export const throttle = (func, wait = 500) => {
  let isLock = false;
  return (...args) => {
    if (!isLock) {
      isLock = true;
      func.apply(this, args);
      setTimeout(() => {
        isLock = false;
      }, wait);
    }
  };
};

export const debounce = (func, wait = 500, isImmediate) => {
  let timer = null;
  return (...args) => {
    const context = this;
    if (isImmediate) {
      if (timer) {
        return;
      }
      func.apply(context, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, wait);
    } else {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        func.apply(context, args);
      }, wait);
    }
  };
};

// https://mobile.ant.design/zh/components/toast
/**
 *
 * @param {string} text
 * @param {'success' | 'fail' | 'loading' | React.ReactNode} icon
 * @param {number} duration 0 则不消失, 单位毫秒
 */
export const tips = (text, icon, duration) => {
  Toast.show({ content: text, icon, duration });
};
