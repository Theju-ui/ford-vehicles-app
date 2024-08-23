import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomElement from './components/search-vehicle/searchVehicle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomElement />
      </header>
    </div>
  );
}

export default App;
