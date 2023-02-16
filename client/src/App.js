import { useState } from 'react';
import './App.css';

import SearchAppBar from './components/SearchAppBar.js';



function App() {
  const [valuePre,setValuePre]=useState("")
  
  const handleChange = () => {
  setValuePre(`${value}`)
  console.log(value);
    
  }

return (
   
    <div className="App">
      <header className="App-header">
        To Do List

      <SearchAppBar affiche={handleChange} />
      </header>
    </div>
);
}


export default App;
