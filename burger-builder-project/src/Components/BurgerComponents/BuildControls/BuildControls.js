import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.sass';

const controls = [
  { label: 'Salad', type: 'salad', amount: 0 },
  { label: 'Bacon', type: 'bacon', amount: 0 },
  { label: 'Meat', type: 'meat', amount: 0 },
  { label: 'Cheese', type: 'Cheese', amount: 0 }
];

const buildControls = props => (
  <div className={styles.BuildControls}>
    {
      controls.map(item =>
          <BuildControl key={item.label}
                        label={item.label}
                        amount={item.amount}
                        type={item.type}/>
      )
    }
  </div>
);

export default buildControls;