import React from 'react';
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from React
        </a>
        <Weather city="Kyiv"/>
      </header>
    </div>
  );
}

export default App;
