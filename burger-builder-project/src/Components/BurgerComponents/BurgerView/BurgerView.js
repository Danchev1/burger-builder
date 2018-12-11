import React from 'react';
import styles from './BurgerView.module.sass';
import Ingredient from "../Ingredients/Ingredients";

const BurgerView = props => {
  return (
      <div className={styles.BurgerWrapper}>
        <Ingredient type='bread-top'/>
        <Ingredient type='meat'/>
        <Ingredient type='cheese'/>
        <Ingredient type='bread-bottom'/>
      </div>
  );

};
export default BurgerView;