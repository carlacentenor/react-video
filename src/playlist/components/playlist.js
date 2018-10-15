import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css'


const Playlist = (props) => {

  return (
    <div className="Playlist">
     
      {
        props.playlist.map((element) => {
          return <Media key={element.id}
            {...element} 
            handleClick ={props.handleOpenModal}
            />
        })
      }

    </div>

  )

}

export default Playlist