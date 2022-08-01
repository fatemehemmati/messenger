import React from 'react'
import style from './Contacts.module.css';
import ContactsProfile from './ContactsProfile';

import SearchBox from '../SearchBox';
const Contacts = () => {
  return (
    <div className={style.container}>
      <SearchBox />
      <div className={style.contactsList}>
    
        <ContactsProfile />
        <ContactsProfile />
        <ContactsProfile />
        <ContactsProfile />
        <ContactsProfile />
      </div>
    </div>
  );
}

export default Contacts;