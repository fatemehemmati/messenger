
import React, { useEffect, useState } from "react";



import RightSide from "./rightSide/RightSide";
import UploadFile from "./middle/UploadFile";
import style from "./Container.module.css";


import MiddleContainer from "./middle/MiddleContainer";
import LeftContainer from "./leftSide/LeftContainer";
const Container = () => {
  const [page, setPage] = useState("chat");
  const [fullRightSide, setfullRightSide] = useState(false);
  const [contacts, setContacts] = useState([]);

  const fetchUsersHandler = () => {
    fetch("http://localhost:1337/api/contacts?populate=*")
      .then(res => {
        return res.json();
      }).then(response => {
        const transformedcontacts = response.data.filter((e)=>e.id !== 1).map((contactData) => {
           return {
            id: contactData.id,
            firstname: contactData.attributes.FirstName,
            username: `${contactData.attributes.FirstName} ${contactData.attributes.LastName}`,
            online: contactData.attributes.IsOnline,
            avatar: contactData.attributes.ProfileIcon
        }
         
        });
       setContacts(transformedcontacts)
      })
  }
  useEffect(() => {
    fetchUsersHandler()
   },[])
  return (
    <div
      className={`${fullRightSide ? style.containerMed : style.containerFull}`}
    >
      <div className={style.leftSide}>
        <LeftContainer contacts={contacts}/>
      </div>
      <div>
  
        {page === "chat" ? (
          <MiddleContainer setPage={setPage} />
        ) : (
          <UploadFile changePage={(page) => setPage(page)} />
        )}
      </div>

      <div>
        <RightSide
          changeShowFull={(stat) => setfullRightSide(stat)}
          showFull={fullRightSide}
        />
      </div>
    </div>
  );
};

export default Container;
