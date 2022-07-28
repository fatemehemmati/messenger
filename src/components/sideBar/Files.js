import {useState,useEffect}from 'react';

import style from './Files.module.css'
import fileIcon from '../../assets/images/file.svg';
import imageIcon from "../../assets/images/image.svg";
import documentIcon from "../../assets/images/document.svg";
import videoIcon from "../../assets/images/video.png";
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

    console.log(props.showFull)
      }
  
)
  return (
    <div className={style.container}>
      {props.showFull && title}

      <img className={style.icons} src={icon} alt="" />
    </div>
  );
}

export default Files;