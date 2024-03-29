import React from 'react'
import style from './Profile.module.css';

const Profile = (prop) => {
  const { user} = prop;
  return (
    <div>
      {user && (
        <div className={style.container}>
          <img className={style.avatar} src={user ? user.avatar : ""} alt="" />
          <div className={style.character}>
            <p>{user.username}</p>
            <p className={style.field}>{user.field}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;