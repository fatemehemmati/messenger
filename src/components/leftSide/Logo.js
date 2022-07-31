import React from 'react';
import logoimg from '../../assets/images/Logo.png';

import style from './Logo.module.css'
const Logo = () => {
  return (
      <div >
          <img className={style.img} src={logoimg} alt="" />
    </div>
  )
}

export default Logo