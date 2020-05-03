import React, { useState, useEffect } from "react";

type Props = {
  label: string;
  onChangeHandler: (keyword: string) => void;
}

const SearchBox: React.FC<Props> = ({label, onChangeHandler}) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    onChangeHandler(keyword);
  }, [keyword, onChangeHandler]);

  return (
    <>
      <label className="block text-gray-700 text-sm mb-2" htmlFor="search">
        {label}
      </label>
      <input
        className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="search"
        type="text"
        value={keyword}
        onChange={(event): void => setKeyword(event.target.value)}
      />
    </>
  );
};

export default SearchBox;
