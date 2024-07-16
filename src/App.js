import React from 'react';
import './App.css';
import Routes from './Routes.js'

class App extends React.Component {
  render() {
    return <div id="wrap">
      <h2>Learning React js and related concepts</h2>
      <Routes/>
    </div>
  }
}

export default App;
