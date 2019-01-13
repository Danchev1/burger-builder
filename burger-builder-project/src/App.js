import React from 'react';
import './assets/sass/global/main.sass';
import Header from "./Components/LayoutComponents/Header/Header";
import Footer from "./Components/LayoutComponents/Footer/Footer";
import BurgerBuilder from "./Containers/BurgerBuilder";

const App = () => {
    return (
        <>
          <Header/>
          <div>SideDrawerComponent, CartComponent, BackDrop(Квото и да е тва?!)</div>
          <main className='MainLayout'>
            <BurgerBuilder/>
          </main>
          <Footer/>
        </>
    )
};

export default App;
