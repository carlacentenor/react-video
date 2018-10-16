import React, { Component } from 'react';
import SearchComponent from '../components/search-component'
class Search extends Component {
    state = {
        value: 'Luis Fonsi'
      }
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value, 'submit')
    
      }
      setInputRef = element => {
        this.input = element;
      }
      handleInputChange = event => {
        this.setState({
            value: event.target.value
    
        //   value: event.target.value.replace(' ', '-')
        })
      }

    render() {
        return (
            <SearchComponent
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />

        )
    }
}

export default Search