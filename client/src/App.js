import React from 'react';

import './App.css';
import SearchAppBar from './components/SearchAppBar.js';
import {verifVoiture} from './logique.js'


function App() {

   

  function proposition  (value) {
    const resultats = verifVoiture(value)
    
    return resultats
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        To Do List

      <SearchAppBar proposition={proposition}  />
      </header>
    </div>
);
}


export default App;
