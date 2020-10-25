import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default ({ endingText }) => {
  return (
    <div className={cn(styles.box, { [styles.show]: !!endingText })}>
      <div className={styles.content}>{endingText}</div>
      <div className={styles.reload} onClick={() => window.location.reload()}>有点意思，再来一遍</div>
    </div>
  );
};
