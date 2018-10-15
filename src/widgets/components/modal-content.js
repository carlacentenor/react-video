import React from 'react'
import './modal-content.css'
const ModalContent = (props) =>{
    return(
        <div className="Modal">{props.children}
       
        <button onClick={props.handleClick} >Close x</button>
        </div>
    )
}

export default ModalContent