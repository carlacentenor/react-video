import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css'
const Category = (props) => {

  return (

    <div>
      <div className="Category">
        <p className="Category__description">{props.description}</p>
        <p className="Category__title">{props.title}</p>
      </div>
     <Playlist playlist={props.playlist} handleOpenModal={props.handleOpenModal} />

    </div>

  )

}

export default Category
