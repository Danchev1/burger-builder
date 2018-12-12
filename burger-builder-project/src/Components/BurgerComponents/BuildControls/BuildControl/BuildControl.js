import React from 'react';
import styles from './BuildControl.module.sass';

const buildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <div className={styles.Controls}>
      <button className={styles.Less}>Less</button>
      <button className={styles.More}>More</button>
    </div>
  </div>
);

export default buildControl;