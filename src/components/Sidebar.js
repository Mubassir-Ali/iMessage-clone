import { Avatar, IconButton, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

import { selectUser } from "../features/userSlice";
import db,{ auth } from "../firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
	  // get chats data from firestore

	  db.collection('chats').onSnapshot((snapshot)=>{
		  setChats(snapshot.docs.map(doc=>({
			  id:doc.id,
			  data:doc.data()
		  })))
	  })
	
  }, [])


  const addChat=()=>{
	  const chatName=prompt('Please Enter a Chat Name')

	  if(chatName){
		db.collection('chats').add({
			chatName:chatName
		})
	  }
	 
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar__avatar"
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton onClick={addChat} variant="outline" className="sidebar__inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar__chat">
        {chats.map(({id,data:{chatName}})=>(<SidebarChat key={id} id={id} chatName={chatName}  />))}
    
      </div>
    </div>
  );
}

export default Sidebar;
