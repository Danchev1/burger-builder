import React from 'react';
import styles from './BurgerView.module.sass';
import Ingredient from "../Ingredients/Ingredients";

const burgerView = props => {

  let ingredients = Object.keys(props.ingredients).map(item => {
    return [...Array(props.ingredients[item])].map((someItem, index)=> {
      return <Ingredient key={item + index} type={item}/>
    });
  }).reduce((arr, item) => {
    return arr.concat(item);
  }, []);

  console.log(ingredients);
  if(!ingredients.length) {
    ingredients = <div>Stat adding your favorites</div>
  }
  return (
      <div className={styles.BurgerWrapper}>
        <Ingredient type='bread-top'/>
        {ingredients}
        <Ingredient type='bread-bottom'/>
      </div>
  );

};
export default burgerView;