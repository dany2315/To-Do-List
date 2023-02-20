import React from 'react';

import './App.css';
import SearchAppBar from './components/SearchAppBar.js';
import {verifVoiture} from './logique.js'


function App() {
  //const [valuePre,setValuePre]=useState("")
  
  const proposition = (value) => {
   verifVoiture(value) 
   
  return value
  }

return (
   
    <div className="App">
      <header className="App-header">
        To Do List

      <SearchAppBar proposition={proposition}  copy={proposition}/>
      </header>
    </div>
);
}


export default App;
