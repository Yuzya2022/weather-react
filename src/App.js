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
          Test React Weather App
        </a>
        <Weather city="Berlin"/>
      </header>
      <p> <a href="https://github.com/Yuzya2022/">Open source code</a> by Olga Iuzvyshyna</p>
    </div>
  );
}

export default App;
