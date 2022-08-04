import {useState,useEffect}from 'react';

import style from './Files.module.css'
import fileIcon from '../../assets/images/file-text.png';
import imageIcon from "../../assets/images/image.png";
import documentIcon from "../../assets/images/file.png";
import videoIcon from "../../assets/images/film.png";
const Files = (props) => {
  const [title, setTitle] = useState('file');
  const [icon,setIcon]= useState(fileIcon)

  useEffect(() => {
    if (props.type === '1') {
      setTitle('files');
      setIcon(fileIcon)
    }
    if (props.type === '2') {
      setTitle('images');
      setIcon(imageIcon)
    }
    if (props.type === '3') {
      setTitle('documents');
      setIcon(documentIcon);
    }
    if (props.type === '4') {
      setTitle('videos');
      setIcon(videoIcon);
    }
      }
  
)
  return (
    <div className={`${style.container} `}>
      <p>{props.showFull && title}</p>

      <div className={`${style.fileItems}  ${style.flexItem}`}>
        <img className={`${style.icons} `} src={icon} alt="" />
      </div>
    </div>
  );
}

export default Files;