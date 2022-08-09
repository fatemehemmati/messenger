import React, { useEffect, useState } from 'react'
import style from './Profile.module.css';

import {getUser} from '../../user';

const Profile = (prop) => {
  const { user } = prop;
  return (
    <>
      {user && (
        <div className={style.container}>
          {" "}
          <img className={style.avatar} src={user ? user.avatar : ""} alt="" />
          <div className={style.character}>
            <p>{user.username}</p>
            <p className={style.field}>{user.field}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;