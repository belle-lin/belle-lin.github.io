import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default ({ handleAnimationEnd }) => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className={styles.box} onAnimationEnd={handleAnimationEnd}>
    </div>
  );
};
