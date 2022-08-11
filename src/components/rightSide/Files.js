import {useState,useEffect}from 'react';

import style from './Files.module.css'
import fileIcon from '../../assets/images/file-text.png';
import imageIcon from "../../assets/images/image.png";
import documentIcon from "../../assets/images/file.png";
import videoIcon from "../../assets/images/film.png";
const Files = (props) => {
  const { type, showFull } = props;
  const [title, setTitle] = useState('file');
  const [icon,setIcon]= useState(fileIcon)

  useEffect(() => {
    if (type === '1') {
      setTitle('files');
      setIcon(fileIcon)
    }
    if (type === '2') {
      setTitle('images');
      setIcon(imageIcon)
    }
    if (type === '3') {
      setTitle('documents');
      setIcon(documentIcon);
    }
    if (type === '4') {
      setTitle('videos');
      setIcon(videoIcon);
    }
      }
  
)
  return (
    <div className={style.container}>
      <p className={style.type}>{showFull && title}</p>
      <div className={style.fileItems}>
        <img className={style.icons} src={icon} alt="" />
      </div>
      
    </div>
  );
}

export default Files;