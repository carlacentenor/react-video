import React from 'react'
import errorImage from '../../../images/404.png';
import './regular-error.css'
const RegularError = (props) => {
    return (
        <div className="Regularerror" >
            <div className="Regularerror__content">
                <p className="Regularerror__title">Ha ocurrido un error</p>
                <img className="Regularerror__image" src={errorImage} />
            </div>

        </div>
    )
}

export default RegularError