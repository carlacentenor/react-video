import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends Component {
// ES7
  state = {
    title:'lorem1234'
  }
  
  // ES6
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title:props.title
  //   }
  // }

// Es7
  handleClick=(event)=> {
    this.setState({
      title:'Falta poco'
    })
  }

  render() {

    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.props.cover} alt=""  />
        </div>
        <div className="Media-description">
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>

      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;