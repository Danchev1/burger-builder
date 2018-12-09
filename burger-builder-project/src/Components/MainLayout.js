import React from 'react';

const MainLayout = props => {
  return (
      <>
        <div>SideDrawerComponent, CartComponent, BackDrop(Квото и да е тва?!)</div>
        <main>{props.children}</main>
      </>
  )
};

export default MainLayout;