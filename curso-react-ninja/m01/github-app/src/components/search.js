import React, { PropTypes } from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Input name user'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
