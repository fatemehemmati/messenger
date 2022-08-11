import React from 'react'
import style from './RightSide.module.css';
import People from './People';
import Files from './Files';
import arrow from "../../assets/images/Button.Arrow.png";
import arrow2 from "../../assets/images/Button.Arrow - Copy.png";

const RightSide = (props) => {
  const { showFull, changeShowFull } = props;
    const clickArrowHandler = () => {
      changeShowFull(!showFull);
      
    }
  return (
    <div
      className={style.rightSide}
    >
      <div>
        <img
          onClick={clickArrowHandler}
          className={style.arrow}
          src={showFull?arrow:arrow2}
          alt=""
        />
      </div>
     <div className={style.peopleContainer}> <People /></div>
     
    
      <div className={style.filesContainer}>
        {props.showFull ? <p className={style.openP}>chat files</p> : <p className={style.closeP}>Files</p>}
      <Files type="1" showFull={showFull} />
      <Files type="2" showFull={showFull} />
      <Files type="3" showFull={showFull} />
        <Files type="4" showFull={showFull} />
      </div>
    </div>
  );
}

export default RightSide;