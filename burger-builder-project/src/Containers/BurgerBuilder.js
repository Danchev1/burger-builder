import React, { Component } from 'react';
import BurgerView from "../Components/BurgerComponents/BurgerView/BurgerView";
import BuildControls from '../Components/BurgerComponents/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
        <div className='BurgerBuilder'>
          <BurgerView ingredients={this.state.ingredients}/>
          <BuildControls/>
        </div>
    )
  };
}

export default BurgerBuilder;