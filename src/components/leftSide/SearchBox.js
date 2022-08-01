import React from 'react';
import style from './SearchBox.module.css';
import searchIcon from '../../assets/images/Path67.png';

const SearchBox = () => {
  return (
    <div className={style.container}>
      <input className={style.searchBox} type="text" placeholder="Search people" name="search" />
      
              <img src={searchIcon}className={style.searchButton} alt="" />
    </div>
  );
}

export default SearchBox;