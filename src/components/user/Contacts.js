import React from 'react'
import style from './Contacts.module.css';

import SearchBox from './SearchBox';
const Contacts = () => {
  return (
    <div className={style.container}>
      <SearchBox />
      <div>  Contacts
          .
          .</div>
    
      </div>
  )
}

export default Contacts;