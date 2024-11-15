import { useRef } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formSearch = inputRef.current.value.trim();
    if (!formSearch) {
      toast.error("Please enter text to search for images.");
      return;
    }
    onSubmit(formSearch);
    inputRef.current.value = "";
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          ref={inputRef}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
