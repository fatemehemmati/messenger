import React from 'react'

import style from './RightSide.module.css';

import People from './People';
import Files from './Files';

import arrow from '../../assets/images/arrow.png';
const RightSide = (props) => {
    const clickArrowHandler = () => {
        
    }
  return (
      <div className={style.rightSide}>
          <div><img onClick={clickArrowHandler} className={style.arrow} src={arrow} alt="" /></div>
          <Files />
          <People />
    </div>
  )
}

export default RightSide;