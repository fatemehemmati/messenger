import React from 'react'
import Profile from "./user/Profile";
import Contacts from "./user/Contacts";
import Logo from "./Logo";
const leftContainer = () => {
  return (
    <div>
     
      <Logo />
      <Profile />
      <Contacts />
    </div>
  );
}

export default leftContainer