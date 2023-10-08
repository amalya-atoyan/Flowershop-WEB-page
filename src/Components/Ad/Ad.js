import React, { useEffect } from "react";
import IMAGES from "../../images";
import './Ad.css'

function Ad({closeModal}) {
    useEffect(() =>{
        window.addEventListener('click',handleClick)
        return()=>{
            window.removeEventListener("click", handleClick);
        }
    },[])
    const handleClick = (e) =>{
        if(e.target.className === 'ad'){
            closeModal()
        }
    }
    return(
        <div className='ad'>
            <div>
                <span onClick={closeModal}>X</span>
                <img src={IMAGES.adPoster} alt='adPoster' className='adPoster'/>
            </div>
        </div>
    )
    
}

export default Ad