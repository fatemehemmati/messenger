import React from 'react'
import style from './Profile.module.css';
import {getUser} from '../../user';

const Profile = () => {
  const user = getUser();
  console.log(user.avatar)
  return (
    <>
      <div className={style.container}> <img className={user.avatar} src={user.avatar} alt="" />
        <div className={style.character}><p>{user.username}
          <br />
      <p className={style.field}>{user.field}</p>  
        </p></div>
      </div>
     
    </>
  )
}

export default Profile;