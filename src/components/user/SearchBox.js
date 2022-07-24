import React from 'react';
import style from './SearchBox.module.css';
import searchIcon from '../../assets/images/search.png';

const SearchBox = () => {
  return (
    <div className={style.container}>
      <input className={style.searchBox} type="text" placeholder="Search.." name="search" />
          <button type="submit">
              <img src={searchIcon}className={style.searchButton} alt="" />
      </button>
    </div>
  );
}

export default SearchBox;