import React from 'react';
import style from './ContactsProfile.module.css';
import avatar from "../../../assets/images/Profile_avatar_placeholder.png";
const ContactsProfile = () => {
  return (
    <>
      <div className={style.container}>
        {" "}
        <img className={style.avatar} src={avatar} alt="" />
        <div className={style.character}>
          <p className={style.username}>
            username
          </p>
          <p className={style.field}>field</p>
        </div>
      </div>
    </>
  );
}

export default ContactsProfile