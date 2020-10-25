import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default ({ start, pickedFn, questionInfo }) => {
  const [active, setActive] = useState();
  const [show, setShow] = useState(false);
  const pick = (index) => {
    setActive(index);
    pickedFn(index);
  };

  useEffect(() => {
    setShow(start);
  }, [start]);

  return (
    <div className={cn(styles.box, { [styles.show]: show })}>
      {!!questionInfo && (
        <>
          <div className={styles.q}>{questionInfo.question}</div>
          <div className={styles.aBox}>
            {questionInfo.answers.map((i) => (
              <div
                key={i.value}
                className={cn(styles.a, {
                  [styles.active]: active === i.value,
                })}
                onClick={() => pick(i.value)}
              >
                <div>{i.answer}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
