import React from 'react'
import style from './Profile.module.css';
import avatar from "../../../assets/images/user6.jpg";
import {getUser} from '../../user';

const Profile = () => {
  const user = getUser();
  return (
    <>
      <div className={style.container}> <img className={style.avatar} src={avatar} alt="" />
        <div className={style.character}><p>{user.username}
          <br />
      <p className={style.field}>{user.field}</p>  
        </p></div>
      </div>
     
    </>
  )
}

export default Profile;