import React from 'react';

import style from './Files.module.css'
import fileIcon from '../../assets/images/file.svg';
import imageIcon from "../../assets/images/image.svg";
import documentIcon from "../../assets/images/document.svg";
const Files = () => {
  return (
    <div className={style.container}>
      Files
      <div>
        <img className={style.icons} src={fileIcon} alt="" />
      </div>
      <div>
        <img className={style.icons} src={imageIcon} alt="" />
      </div>
      <div>
        <img className={style.icons} src={documentIcon} alt="" />
      </div>
    </div>
  );
}

export default Files;