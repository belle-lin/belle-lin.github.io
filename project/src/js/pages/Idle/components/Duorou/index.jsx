import React, { useCallback, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { Button } from 'antd-mobile';
import { Line, Circle } from 'rc-progress';
import { getPowerMultiNum, throttle } from 'app/utils/utils';
import styles from './index.module.scss';

export default ({
  currentDay,
  dayProgress,
  hungryProgress,
  hungryAdd,
  autoFeed,
  setState,
}) => {
  useEffect(() => {}, []);

  const grow = useCallback(() => {
    setState({
      currentDay: currentDay + 1,
      hungryProgress: 0,
      dayProgress: 0,
    });
  }, [currentDay]);

  const cook = useCallback(() => {
    setState({ hungryProgress: hungryProgress + hungryAdd });
  }, [hungryProgress, hungryAdd]);

  const feed = useCallback(() => {
    setState({ dayProgress: dayProgress + 1, hungryProgress: 0 });
  }, [dayProgress]);

  const dayNeed = useMemo(
    () => getPowerMultiNum(currentDay, 1.12),
    [currentDay]
  );

  useEffect(() => {
    if (autoFeed) {
      if (hungryProgress >= 10) {
        feed();
      }
    }
  }, [hungryProgress, autoFeed, feed]);

  return (
    <div className={styles.box}>
      <div className={styles.dayProgress}>
        <div className={styles.left}>
          <div>再长大一点：</div>
          <div className={styles.blue}>
            {dayProgress > dayNeed ? dayNeed : dayProgress} / {dayNeed}
          </div>
          <Button
            className={styles.grow}
            disabled={dayProgress < dayNeed}
            color="success"
            onClick={grow}
          >
            长大
          </Button>
        </div>
        <Circle
          className={styles.circle}
          percent={
            (dayProgress / dayNeed > 1 ? 1 : dayProgress / dayNeed) * 100
          }
          strokeWidth={5}
          strokeColor="#7bddd1"
        />
      </div>
      <div className={styles.hungryProgress}>
        <div className={styles.title}>
          多吃才能长得快：{hungryProgress > 10 ? 10 : hungryProgress} / 10
        </div>
        <Line
          className={styles.line}
          percent={(hungryProgress / 10) * 100}
          strokeWidth={5}
          trailWidth={3}
          strokeColor="#a3eab1"
        />
      </div>
      <div className={styles.btnGroup}>
        <Button className={styles.mr20} color="primary" onClick={throttle(cook)}>
          泡奶粉
        </Button>
        <Button disabled={hungryProgress < 10} color="success" onClick={feed}>
          喂奶 🍼
        </Button>
      </div>
    </div>
  );
};
