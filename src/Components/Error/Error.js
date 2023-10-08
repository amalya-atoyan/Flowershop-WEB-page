import React from "react";
import './Error.css'
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate()
    return(
        <div className="errDiv">
            <h1>Error 404</h1>
            <button className="homeBtn" onClick={() => navigate('./')}>Home</button>
        </div>
    )
}

export default Error