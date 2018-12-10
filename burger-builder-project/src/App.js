import React from 'react';
import './assets/sass/global/main.sass';
import Header from "./Components/LayoutComponents/Header/Header";
import Footer from "./Components/LayoutComponents/Footer/Footer";
import MainLayout from "./Components/LayoutComponents/MainLayout/MainLayout";
import BurgerBuilder from "./Containers/BurgerBuilder";

const App = () => {
    return (
        <>
          <Header/>
          <MainLayout>
            <BurgerBuilder/>
          </MainLayout>
          <Footer/>
        </>
    )
};

export default App;
