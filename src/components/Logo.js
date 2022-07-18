import React from 'react';
import logoimg from '../assets/images/logo.svg.png';

import style from './Logo.module.css'
const Logo = () => {
  return (
      <div className={style.container}>
          <img className={style.img} src={logoimg} alt="" />
          <p className={style.text}><strong>Messenger</strong> </p>
    </div>
  )
}

export default Logo