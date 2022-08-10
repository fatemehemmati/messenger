import React,{useState} from 'react'
import style from './Contacts.module.css';
import ContactsProfile from './ContactsProfile';
import searchIcon from "../../../assets/images/Path67.png";

const Contacts = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResault, setSearchResault] = useState([]);
  
  const { contacts } = props;

  const searchHandler = (e) => {
    const { contacts } = props;
    setSearchInput(e.target.value);

    let res =contacts.filter((value) => {
     return value.username.toLowerCase().includes(e.target.value)
    })
    
    setSearchResault(res);
    
  }

  return (
    <div>
      <div className={style.searchBoxcontainer}>
        <div className={style.container}>
          <input
            className={style.searchBox}
            type="text"
            placeholder="Search people"
            name="search"
            onChange={searchHandler}
            value={searchInput}
          />
          <img src={searchIcon} className={style.searchButton} alt="" />
        </div>
      </div>
      {searchInput?
      <div className={style.contactsList}>
        {searchResault.map((element, index) => (
          <ContactsProfile
            key={index}
            chatPage={props.chatPage}
            changeChatPage={props.changeChatPage}
            contact={element}
          />
        ))}
      </div>:
      <div className={style.contactsList}>
        {contacts.map((element, index) => (
          <ContactsProfile
            key={index}
            chatPage={props.chatPage}
            changeChatPage={props.changeChatPage}
            contact={element}
          />
        ))}
      </div>}
    </div>
  );
}
export default Contacts;