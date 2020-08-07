import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Button, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import Logo from "./assets/logo.png";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "sonny", message: "hey guys" },
    { username: "rabi", message: "hey guys" },
    { username: "elmard", message: "hey whats up" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  //useEffect run code on a condition in REACT
  useEffect(() => {
    setUsername(prompt("Please enter your namse"));
  }, []); // condition);

  //console.log(input);
  // console.log(messages);
  // console.log(username);
  const sendMessage = (event) => {
    event.preventDefault(); // don't refresh page
    // all the logi te send message goes
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className='App'>
      <img src={Logo} width='100' height='100' />
      <h1>Hello Jaiti programmers </h1>
      <h2>Welcome {username}</h2>
      <form className='app_form'>
        <FormControl className='app_formControl'>
          <Input
            className='app_input'
            value={input}
            placeholder='Enter a message ...'
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='app_iconButton'
            variant='contained'
            color='primary'
            type='submit'
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* {messages themeselves} */}
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message username={username} message={message} key={id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
