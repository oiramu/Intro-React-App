import "./TodoSearch.css";
import searchIcon from "../../assets/search-icon.svg";

function TodoSearch() {
  return (
    <div className="search-container">
      <input placeholder="Cortar cebolla" />
      <img className="search-icon" src={searchIcon} />
    </div>
  );
}

export { TodoSearch };
