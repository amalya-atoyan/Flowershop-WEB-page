import React from "react";
import Search from "../Components/Search/Search";
import { Outlet } from "react-router-dom";

function ShopWrapper({txt,setTxt}) {
    return(
        <div>
            <Search {...{txt,setTxt}}/>
            <Outlet/>
        </div>
    )
    
}

export default ShopWrapper