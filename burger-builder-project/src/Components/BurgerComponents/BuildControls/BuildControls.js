import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.sass';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Meat', type: 'meat'},
  { label: 'Cheese', type: 'Cheese'},
];

const buildControls = props => (
  <div className={styles.BuildControls}>
    {controls.map(item => <BuildControl key={item.label} label={item.label} type={item.type}/>)}
  </div>
);

export default buildControls;