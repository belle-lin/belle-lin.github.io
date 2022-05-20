import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import { tips } from 'app/utils/utils';
import styles from './index.module.scss';

export default ({ className, list, currentDay, handleTabClick }) => {
  const handleClick = useCallback(
    (i) => {
      if (currentDay < i.dayLimit) {
        tips(`${i.dayLimit}天后解锁哦`);
      } else {
        handleTabClick(i.id);
      }
    },
    [currentDay, handleTabClick]
  );

  useEffect(() => {
    //
  }, []);

  return (
    <div className={cn(className, styles.box)}>
      {list.map((i) => (
        <div
          key={i.id}
          className={cn(
            styles.item,
            { [styles.active]: i.active },
            { [styles.disabled]: currentDay < i.dayLimit }
          )}
          onClick={() => handleClick(i)}
        >
          <img src={i.icon} />
          <span>{i.text}</span>
        </div>
      ))}
    </div>
  );
};
