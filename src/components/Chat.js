import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import { selectChatId, selectChatName } from "../features/chatSlice";
import {selectUser} from '../features/userSlice'
import { useSelector } from "react-redux";
import db from "../firebase";
import firebase from 'firebase'

function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user=useSelector(selectUser)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");

    // firebase magic

	db.collection('chats').doc(chatId).collection('messages').add({
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		message:input,
		uid:user.uid,
		photo:user.photo,
		email:user.email,
		displayName:user.displayName


	})

	}
  

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat message */}
      <div className="chat_messages">
        {messages.map(({id,data}) => (
          <Message key={id} contents={data} />
        ))}
      </div>
      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            type="text"
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
