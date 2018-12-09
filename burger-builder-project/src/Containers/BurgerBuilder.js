import React, { Component } from 'react';

class BurgerBuilder extends Component {
  render() {
    return (
        <div className='BurgerView'>
          <div className='View'>Burger View</div>
          <div className='Ingredients controls'>Ingredients controls</div>
        </div>
    )
  };
}

export default BurgerBuilder;