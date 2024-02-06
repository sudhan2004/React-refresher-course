import React, { Component } from "react";
import "./userProfile.css";
import { HashLink as Link } from 'react-router-hash-link';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CloseIcon from '@mui/icons-material/Close';

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    const { onCloseUserProfile } = this.props;
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" style={{fontSize:"100px"}} fontSize="large"/>
          </div>
          <h4 style={{color:"white"}}>Sudhan Kanna</h4>
          <p>😴😴</p>
        </div>
        <div style={{color:"white",marginLeft:"-20px",marginTop:"-25px",paddingBottom:"25px"}}>_____________________________</div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
          <div className="close"><button onClick={onCloseUserProfile}>Close</button></div>
          <div className="logout"><Link smooth to="/"><button>Logout</button></Link></div>
      </div>
    );
  }
}
