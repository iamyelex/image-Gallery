import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handlerChange = function (e) {
    const text = e.target.value;
    setWord(text);
  };

  const handlerSearch = function (e) {
    e.preventDefault();

    if (!word) return;

    navigate(`/search/${word}`);
    setWord("");
  };

  return (
    <div className="mt-2">
      <form
        onSubmit={handlerSearch}
        className="flex items-center lg:justify-center gap-2 px-4 lg:px-0"
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search images"
          className="px-3 w-full lg:w-[40%] py-1 border outline-none rounded-lg"
          onChange={handlerChange}
          value={word}
        />
        <button className="text-sm p-1 bg-slate-200 rounded-md">search</button>
      </form>
    </div>
  );
};

export default Search;
