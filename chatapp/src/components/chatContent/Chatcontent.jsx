import React, { Component, useState, createRef, useEffect } from "react";
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideocamIcon from '@mui/icons-material/Videocam';
import SendIcon from '@mui/icons-material/Send';
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import UserProfile from '../userProfile/UserProfile';

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Sudhan, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  onSend = () => {
    if (this.state.msg.trim() !== "") {
      const newMessage = {
        key: this.state.chat.length + 1,
        type: "",
        msg: this.state.msg,
        image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      };

      this.setState((prevState) => ({
        chat: [...prevState.chat, newMessage],
        msg: "",
      }), () => {
        this.scrollToBottom();
      });
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      isUserProfileOpen: false,
    };
  }
  openUserProfile = () => {
    this.setState((prevState) => ({
      isUserProfileOpen: !prevState.isUserProfileOpen,
    }));
  };

  closeUserProfile = () => {
    this.setState({ isUserProfileOpen: false });
  };

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
            <button style={{border:"none",background:"none"}} onClick={this.openUserProfile}>
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              /></button>
              <p style={{color:"white"}}>Sudhan Kanna</p>
              <button style={{color:"white",border:"none",background:"none"}}><VideocamIcon style={{marginLeft:"600px"}} fontSize="medium"/></button>
              <button style={{color:"white",border:"none",background:"none"}}><CallIcon style={{marginLeft:"40px"}} fontSize="medium"/></button>
              <button style={{color:"white",border:"none",background:"none"}}><MenuIcon style={{marginLeft:"40px"}} fontSize="medium"/></button>
            </div>
            {this.state.isUserProfileOpen && (
              <div className="user-profile-sidebar">
                <UserProfile onCloseUserProfile={this.closeUserProfile} />
              </div>
            )}
          </div>
          

          {/* <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div> */}
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <EmojiEmotionsIcon style={{marginTop:"5px",marginLeft:"2px"}} fontSize="medium"/>
              {/* <i className="fa fa-plus"></i> */}
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={this.onSend}>
              {/* <i className="fa fa-paper-plane"></i> */}
              <SendIcon style={{marginTop:"5px",marginLeft:"2px"}} fontSize="medium"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}