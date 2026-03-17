import "./Search.css";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`search-form ${open ? "open" : ""}`}
    >
      <button
        type="button"
        className="search-btn"
        onClick={() => setOpen(prev => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#8a2be2"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </button>
      <input
        type="text"
        ref={inputRef}
        className="search-input"
        placeholder="Search product..."
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
    </form>
  );
};

export default Search;