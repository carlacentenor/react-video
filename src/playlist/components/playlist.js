import React, { Component } from 'react';
import Media from './media.js'
class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    return (
      <div>
        {
          playlist.map((element, index) => {
            return <Media key={index} title={element.title} author={element.author} image={element.cover} />
          })
        }

      </div>

    )
  }
}

export default Playlist