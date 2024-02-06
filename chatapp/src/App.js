import Login from "./components/Login";
import React from "react";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
// import {Routes,Route, Router} from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Nav />  */}
      {/* <ChatBody />  */}
      {/* <Router>
        <Route path="/" element={<Login/>}/>
        <Route path="/chatmain" element={<ChatBody/>}/>
      </Router> */}
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/chatmain" element={<ChatBody/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;