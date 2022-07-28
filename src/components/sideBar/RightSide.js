import React from 'react'

import style from './RightSide.module.css';

import People from './People';
import Files from './Files';

import arrow from '../../assets/images/arrow.png';
const RightSide = (props) => {
    const clickArrowHandler = () => {
      props.changeShowFull(!props.showFull);
      
    }
  return (
    <div
      className={
    style.rightSide}
    >
      <div>
        <img
          onClick={clickArrowHandler}
          className={style.arrow}
          src={arrow}
          alt=""
        />
      </div>

      <People />
      <Files type="1" showFull={props.showFull} />
      <Files type="2" showFull={props.showFull} />
      <Files type="3" showFull={props.showFull} />
      <Files type="4" showFull={props.showFull} />
    </div>
  );
}

export default RightSide;