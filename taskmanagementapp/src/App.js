// import logo from './logo.svg';
import Login from "./components/Login";
import Main from "./components/Main";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/taskmain" element={<Main/>}/>
        </Routes>
    </Router>
      {/* <Main/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
