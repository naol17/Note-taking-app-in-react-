// import React, { useState,useEffect } from 'react'
// import {nanoid} from 'nanoid'

import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import NotesList from './components/NotesList';

function App() {
  // sample notes
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date:"03/11/2021"
  },
 
]);

// state for the search bar   
const [searchNote,setSearchNote] = useState('');
const [darkMode,setDarkMode] = useState(false)
{/*to store or save the data in local storage even after closing the tab*/}
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])
  return (
    <div className="App">
      the start 
    </div>
  );
}

export default App;
