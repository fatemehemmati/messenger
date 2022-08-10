import React, { useEffect, useState } from "react";
import RightSide from "./rightSide/RightSide";
import UploadFile from "./middle/UploadFile";
import style from "./Container.module.css";
import {getUser} from './user'
import MiddleContainer from "./middle/MiddleContainer";
import LeftContainer from "./leftSide/LeftContainer";
import Modal from "./ui/Modal";

const Container = () => {
  const [page, setPage] = useState("chat");
  const [fullRightSide, setfullRightSide] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [chatPage, setChatPage] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

   
  const fetchUsersHandler = () => {
    fetch("http://localhost:1337/api/contacts?populate=*")
      .then((res) => {
        return res.json();
      })
      .then(async (response) => { 
        let user = await getUser();
        setUser(user);

        const transformedcontacts = response.data
          .filter((e) => e.id !== user.id)
          .map((contactData) => {
            return {
              id: contactData.id,
              firstname: contactData.attributes.FirstName,
              username: `${contactData.attributes.FirstName} ${contactData.attributes.LastName}`,
              online: contactData.attributes.IsOnline,
              avatar: contactData.attributes.ProfileIcon,
            };
          });
        setContacts(transformedcontacts);
      }).catch((error) => {
     setError('something went wrong');
      });
  };
  useEffect(() => {
    fetchUsersHandler();
   
  }, []);
   
  return (
    <div
      className={`${fullRightSide ? style.containerMed : style.containerFull}`}
    >
      <div className={style.leftSide}>
        <LeftContainer
          user={user}
          contacts={contacts}
          changeChat={(chat) => setChatPage(chat)}
          chatPage={chatPage}
        />
      </div>

      <div>
        {page === "chat" ? (
          <MiddleContainer user={user} setPage={setPage} ChatPage={chatPage} />
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
      {error && <Modal text={error}  changeModal={(stat)=>setError(stat)} />}
    </div>
  );
};

export default Container;
