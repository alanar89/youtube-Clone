import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const hanlderSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };

  return (
    <div className="flex w-full h-10  justify-center">
      <form className="flex w-1/2" action="" onSubmit={hanlderSubmit}>
        <input
          className="  rounded-l-full border focus:border-gray-100 dark:focus:border-gray-500 outline-none bg-white dark:text-white dark:bg-gray-950 dark:border-gray-700 shadow-sm w-full px-4 "
          id="search"
          type="search"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />

        <button
          type="submit"
          className=" rounded-r-full border border-l-0 w-16 dark:bg-gray-900 dark:border-gray-700"
        >
          <MdSearch className="text-gray-700 dark:text-white border-none text-xl mx-auto " />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
