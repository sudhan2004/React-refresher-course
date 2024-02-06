import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/Chatcontent";
import UserProfile from "../userProfile/UserProfile";
import { HashLink as Link } from 'react-router-hash-link';
// import "../src/App.css"

export default class ChatBody extends Component {
  render() {
    return (
      <div className="__main">
        <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        {/* <UserProfile /> */}
      </div>
      </div>
    );
  }
}