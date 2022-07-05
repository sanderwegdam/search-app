import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.css";

export default function SearchForm({ onChangeSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onChangeSearch(search);
  }

  function onChange(e) {
    const value = e.target.value;
    if (value === "") {
      alert("Voer eerst iets in");
    } else {
      setSearch(value);
    }
  }

  return (
    <form className="container-form" onSubmit={handleSubmit} action="">
      <input
        className="searchSearch input"
        onChange={onChange}
        type="text"
        placeholder="Vul hier uw zoekwoord in"
      />
      <BiSearch size={25} className="searchIcon input" onClick={handleSubmit} />
    </form>
  );
}
