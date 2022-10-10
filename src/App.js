import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
