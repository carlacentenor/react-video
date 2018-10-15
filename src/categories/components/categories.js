import React from 'react';
import './categories.css';
import Category from '../components/category'

const Categories = (props) => {

  return (

    <div className="Categorie">

      {
        props.categories.map((element) => {
          return <Category key={element.id}
            {...element} 
            handleOpenModal={props.handleOpenModal}
            />
        })
      }

    </div>

  )

}

export default Categories