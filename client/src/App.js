import { useState } from 'react';
import './App.css';

import SearchAppBar from './components/SearchAppBar';


function App() {
    const [text,setText]= useState("")

  return (
    <div className="App">
      <header className="App-header">
        To Do List

      <SearchAppBar/>
      </header>
    </div>
  );
}

export default App;
