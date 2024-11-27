import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchQuery } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchQuery(searchValue);
  };

  return (
    <>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="mosque"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchForm;
