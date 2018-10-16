import React from 'react'
import './search-component.css'
const SearchComponent = (props) => {
  return (
    <form className="Search"
    onSubmit={props.handleSubmit}
    >
      <input className="Search-input" 
      ref={props.setRef}
      placeholder="Busca tu video favorito" 
      type="text"
      value={props.value}
      onChange={props.handleChange}
      />
    </form>

  )
}

export default SearchComponent