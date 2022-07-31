import React from 'react'

import style from './RightSide.module.css';

import People from './People';
import Files from './Files';

import arrow from "../../assets/images/Button.Arrow.png";
import arrow2 from "../../assets/images/Button.Arrow - Copy.png";
const RightSide = (props) => {
    const clickArrowHandler = () => {
      props.changeShowFull(!props.showFull);
      
    }
  return (
    <div
      className={style.rightSide}
    >
      <div>
        <img
          onClick={clickArrowHandler}
          className={style.arrow}
          src={props.showFull?arrow:arrow2}
          alt=""
        />
      </div>
     
      <People />
    
      {props.showFull?<p>chat files</p>:<p>Files</p>} 
      <Files type="1" showFull={props.showFull} />
      <Files type="2" showFull={props.showFull} />
      <Files type="3" showFull={props.showFull} />
      <Files type="4" showFull={props.showFull} />
    </div>
  );
}

export default RightSide;