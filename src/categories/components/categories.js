import React from 'react';
import './categories.css';
import Category from '../components/category'
import Search from '../../widgets/containers/search'
const Categories = (props) => {

  return (

    <div className="Categorie">
    <Search/>

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