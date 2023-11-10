import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function SendMessage() {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage(""); // 送信後にフォームをクリア
  }

  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder='メッセージを入力してください'
            type='text'
            value={message}
            onChange={handleInputChange}
          />
          <SendOutlinedIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
