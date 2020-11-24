import React from 'react';

const SearchBar = ({handleChange, handleRadio,  alph, price}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={alph} onChange={handleRadio}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={price} onChange={handleRadio}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
