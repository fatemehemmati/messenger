import React from 'react'
import Profile from "./user/Profile";
import Contacts from "./user/Contacts";
import Logo from "./Logo";
const leftContainer = (props) => {
 console.log(props)
  return (
    <div>
     
      <Logo />
      <Profile />
      <Contacts  contacts={props.contacts} />
    </div>
  );
}

export default leftContainer