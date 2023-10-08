import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import './HomeWrapper.css'
import BasketPart from "../Components/BasketPart/BasketPart";


function HomeWrapper({cart}) {

  return (
    <div>
      <Navbar />
      <div className='posDiv'>
        <BasketPart cart={cart}/>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
