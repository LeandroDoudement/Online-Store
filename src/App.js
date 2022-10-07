import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    console.log(getCategories());

    return (
      <div className="App">
        <h1>Trybe</h1>
      </div>
    );
  }
}

export default App;
