import React, { useEffect } from 'react';
import cn from 'classnames';
import startupImg from 'assets/images/startup.jpg';
import styles from './index.module.scss';

export default ({ handleAnimationEnd }) => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className={styles.box} onAnimationEnd={handleAnimationEnd}>
      <img src={startupImg} />
    </div>
  );
};
