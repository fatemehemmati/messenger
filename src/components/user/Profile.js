import React from 'react'
import avatar from "../../assets/images/Profile_avatar_placeholder.png";
import style from './Profile.module.css';

const Profile = () => {
  return (
    <>
      <div className={style.container}> <img className={style.avatar} src={avatar} alt="" />
      <p>username</p>
        <p>field</p>
      </div>
     
    </>
  )
}

export default Profile;