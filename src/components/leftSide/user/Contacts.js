import React,{useState} from 'react'
import style from './Contacts.module.css';
import ContactsProfile from './ContactsProfile';

import SearchBox from '../SearchBox';
const Contacts = (props) => {
  const { contacts } = props;

  return (
    <div className={style.container}>
      <SearchBox />
      <div className={style.contactsList}>
        {contacts.map(element =>  <ContactsProfile contact={element} />)}
      </div>
        
      </div>
  
  );
}

export default Contacts;