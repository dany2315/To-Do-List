import React from 'react';
import { useState } from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar.js';
import {verifVoiture} from './logique.js'


function App() {
  //const [valuePre,setValuePre]=useState("")
  const [rendu, setRendu] = useState(verifVoiture());

  const proposition = (v) => {
    setRendu(verifVoiture(v))

  }

return (
   
    <div className="App">
      <header className="App-header">
        To Do List

      <SearchAppBar proposition={proposition} {rendu ?rendu={rendu}:}/>
      </header>
    </div>
);
}


export default App;
