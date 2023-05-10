import React from "react";

import "./TodoSearch.css";
import searchIcon from "../../assets/search-icon.svg";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue);
  return (
    <div className="search-container">
      <input
        value={searchValue}
        placeholder="Cortar cebolla"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export { TodoSearch };
