import React, { useState } from "react";

const SearchBar = ({ onSubmitForm }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="form">
          <label>Search videos</label>
          <input
            onChange={onInputChange}
            type="text"
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
