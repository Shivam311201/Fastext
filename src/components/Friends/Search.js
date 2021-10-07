import React from 'react';
import "../../styles/Friends/Search.css";

export default function Search() {

  function searchContact(name) {

  };

  return (
    <div className="Search">
      <input
        type="text"
        id="search"
        className="SearchInput"
        placeholder="Search for Chat or a Contact"
        onChange={(event) => searchContact(event.currentTarget.value)}
      />
    </div>
  );
}
