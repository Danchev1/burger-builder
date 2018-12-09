import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainLayout from "./Components/MainLayout";
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
