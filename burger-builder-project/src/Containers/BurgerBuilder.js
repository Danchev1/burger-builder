import React, { Component } from 'react';
import BurgerView from "../Components/BurgerComponents/BurgerView/BurgerView";

class BurgerBuilder extends Component {
  render() {
    return (
        <div className='BurgerBuilder'>
          <BurgerView/>
          <div className='Ingredients controls'>Ingredients controls</div>
        </div>
    )
  };
}

export default BurgerBuilder;