import React, { useEffect,useState } from 'react';
import style from './ContactsProfile.module.css';
import avatar from "../../../assets/images/Profile_avatar_placeholder.png";
const ContactsProfile = (props) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
 
  })
  return (
    <>
      <div className={style.container}>
   
        <img className={style.avatar} src={avatar} alt="" />
        <div className={style.character}>
          <p className={style.username}>
          {props.firstName}
          </p>
          <p className={style.field}>field</p>
        </div>
      </div>
    </>
  );
}

export default ContactsProfile