import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import './SearchBar.css';
const SearchBar = ({ placeholder, data }) => {
  const [searchList, setSearchList] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setSearchList([]);
    } else {
      setSearchList(newFilter);
    }
  };
  const clearInput = () => {
    setSearchList([]);
    setWordEntered('');
  };
  return (
    <div className="bg-gray-200  sm:w-[400px] lg:w-[500px] ">
      <div className="searchInputs flex relative rounded-md">
        <input
          className="bg-transparent p-2 px-2  focus:outline-none w-full relative "
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="flex items-center absolute top-2  right-2 justify-center  ">
          {searchList.length === 0 ? (
            <AiOutlineSearch
              size={27}
              className="cursor-pointer ml-2 font-bold"
            />
          ) : (
            <AiOutlineClose
              size={27}
              className="cursor-pointer ml-2 font-bold"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {searchList.length != 0 && (
        <div className="dataResult  h-[160px]  w-[200px]  mt-[5px] bg-white absolute z-40 rounded-b-xl">
          {searchList.slice(0, 5).map((value, key) => {
            return (
              <div key={key}>
                <a
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  href={value.link}
                >
                  <img
                    className="h-12 w-12 rounded-full"
                    src={value.image}
                    alt=""
                  />
                  <div className="flex flex-col ml-2">
                    <h2 className="text-lg font-bold">{value.name}</h2>
                    <div className="flex gap-6">
                      <h3 className="text-sm">{value.category}</h3>
                      <span className="text-md text-orange-500">
                        {value.price}
                      </span>
                    </div>
                    <div></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
