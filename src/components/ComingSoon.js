import React from 'react';
import styles from './ComingSoon.module.css';

function ComingSoon() {
  return (
    <div className={styles.root}>
      <h1>Coming Soon</h1>
      <div className={styles.container}>
        <h2 className={styles.text}>Under construction</h2>
      </div>
    </div>
  );
}

export default ComingSoon;
