import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import "./Search.css";

export default function SearchApp() {

  const [search, setSearch] = useState([]);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo(searchword = 'flower') {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL}?key=28365115-0a3bf272e5ebf75c65df15e29&&q=${searchword}`
      );
      const response = await data.json();
      console.log(response)
      const items = response.hits.map((data) => { return data.largeImageURL })
      setSearch(items);

    } catch (error) {
      window.location.href = "/";
    }
  }

  function handleChangeSearch(searchword) {
    setSearch(searchword);
    loadInfo(searchword);
  }

  return (
    <div className="search-app">
      <SearchForm onChangeSearch={handleChangeSearch} />
      <>
        <img src={search[0]} className="d-flex" />
        <img src={search[1]} className="d-flex" />
        <img src={search[2]} className="d-flex" />
        <img src={search[3]} className="d-flex" />
        <img src={search[4]} className="d-flex" />
        <img src={search[5]} className="d-flex" />
        <img src={search[6]} className="d-flex" />
        <img src={search[7]} className="d-flex" />
        <img src={search[8]} className="d-flex" />
        <img src={search[9]} className="d-flex" />
        <img src={search[10]} className="d-flex" />
        <img src={search[11]} className="d-flex" />
        <img src={search[12]} className="d-flex" />
        <img src={search[13]} className="d-flex" />
        <img src={search[14]} className="d-flex" />
        <img src={search[15]} className="d-flex" />
      </>
    </div >
  );
}
