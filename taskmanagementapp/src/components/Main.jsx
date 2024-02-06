import React, { useState, useEffect } from 'react';
import './Main.css';
import Image from './images/icon.png';
import { HashLink as Link} from 'react-router-hash-link';

function Main() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    showTask();
  }, []);

  function addTask() {
    if (inputValue === '') {
      alert('You must write something');
    } else {
      const newTask = { text: inputValue, checked: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      saveData([...tasks, newTask]);
    }
    setInputValue('');
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      addTask();
    }
  }

  function handleTaskClick(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
    saveData(updatedTasks);
  }

  function handleDeleteClick(index) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      saveData(updatedTasks);
      return updatedTasks;
    });
  }

  function saveData(updatedTasks) {
    setTasks(updatedTasks);
    localStorage.setItem('data', JSON.stringify(updatedTasks));
  }

  async function showTask() {
    try {
      const storedData = localStorage.getItem('data');
      if (storedData) {
        setTasks(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error parsing stored data:', error);
      // Handle parsing error if needed
    }
  }

  return (
    <div>
      <div className="container">
      <div className="todoapp">
        <h2>
          Task Management App
          <img src={Image} alt="icon" />
        </h2>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Add your tasks"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            />
          <button className='button1' onClick={addTask}>Add</button>
        </div>
        <div className="scrollable-container">
          <ul id="list-container">
          {tasks.map((task, index) => (
            <li
            key={index}
            className={task.checked ? 'checked' : ''}
            onClick={() => handleTaskClick(index)}
            >
              {task.text}
              <span onClick={() => handleDeleteClick(index)}>&times;</span>
            </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
    <div className='logoutbutton'><Link smooth to='/'><button className='button2'>LOG OUT</button></Link></div>
      </div>
  );
}

export default Main;
