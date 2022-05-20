import React, { useCallback, useEffect } from 'react';
import { Button } from 'antd-mobile';
import styles from './index.module.scss';

export default ({ currentDay, hapiList, setState }) => {
  useEffect(() => {
    //
  }, []);

  const upgrade = useCallback(({ text, spend, field, changeTo }) => {
    const _hapiList = hapiList.map((i) => ({
      ...i,
      active: i.text === text ? true : false,
    }));

    setState({
      [field]: changeTo,
      currentDay: currentDay - spend,
      hapiList: _hapiList,
    });
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        我是哈啤，多肉的亲哥哥，照顾多肉也算上我一份吧！
      </div>
      <div className={styles.btnGroup}>
        {hapiList.map((i) => (
          <Button
            key={i.text}
            className={styles.btn}
            color="primary"
            onClick={() => upgrade(i)}
            disabled={currentDay < i.spend || i.active}
          >
            {i.text} -{i.spend} 天
          </Button>
        ))}
      </div>
    </div>
  );
};
