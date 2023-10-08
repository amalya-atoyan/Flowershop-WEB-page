import React, { useRef } from "react";
import './Search.css'

function Search({txt,setTxt}) {
    const formRef = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} ref={formRef} className="form">
            <input  value={txt} onChange={(e) => setTxt(e.target.value)} type='text' placeholder='  Search'/>
        </form>
    )   
}

export default Search
