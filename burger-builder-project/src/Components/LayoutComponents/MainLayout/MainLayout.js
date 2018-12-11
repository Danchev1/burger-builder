import React from 'react';
import styles from './MainLayout.module.sass'

const mainLayout = props => {
  return (
      <>
        <div>SideDrawerComponent, CartComponent, BackDrop(Квото и да е тва?!)</div>
        <main className={styles.MainLayout}>{props.children}</main>
      </>
  )
};

export default mainLayout;