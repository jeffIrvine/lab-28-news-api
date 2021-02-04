import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleClick, handleSubmit }) => (
  <div> 
    <form handleSubmit = { handleSubmit }>
      <input value="search" onChange={ handleClick }></input>
      <button> Search </button>
    </form>
  </div>
);

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
