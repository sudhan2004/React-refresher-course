import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import AddIcon from '@mui/icons-material/Add';

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        id: 1,
        name: "Sudhan Kanna",
        active: false,
        isOnline: true,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
        id: 2,
        name: "Me",
        active: false,
        isOnline: true,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        id: 3,
        name: "Neha",
        active: false,
        isOnline: false,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
        id: 4,
        name: "Father",
        active: false,
        isOnline: true,
      },
      {
        image: "https://pbs.twimg.com/profile_images/770394499/female.png",
        id: 5,
        name: "Mother",
        active: false,
        isOnline: false,
      },
      {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
        id: 6,
        name: "Friend",
        active: false,
        isOnline: true,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
        id: 7,
        name: "Virat Kohli",
        active: false,
        isOnline: true,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
        id: 8,
        name: "Cristiano Ronaldo",
        active: false,
        isOnline: false,
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
        id: 9,
        name: "Roger Federrer",
        active: false,
        isOnline: true,
      },
      {
        image: "https://pbs.twimg.com/profile_images/770394499/female.png",
        id: 10,
        name: "Lionel Messi",
        active: false,
        isOnline: true,
      },
    ];
    constructor(props) {
      super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
          <div style={{paddingLeft:"100px",paddingTop:"20px"}}>
        <button style={{marginLeft:"0px"}} className="btn">
            <AddIcon  style={{marginLeft:"20px",marginTop:"7px",marginBottom:"7px",marginRight:"-20px"}} fontSize="large"/>
          <i className="fa fa-plus"></i>
          <span style={{fontSize:"20px"}}>New chat</span>
        </button>
          </div>
        <div style={{paddingTop:"20px"}} className="chatlist__heading">
          <h1 style={{color:"white"}}>Chats</h1>
          <button className="btn-nobg">
            {/* <i className="fa fa-ellipsis-h"></i> */}
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Contact" required />
            <button className="search-btn">
              {/* <i className="fa fa-search"></i> */}
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
              name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
