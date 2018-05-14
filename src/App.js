import React, { Component } from 'react';
import './App.css';

import DogGallery from './components/DogGallery'

class App extends Component {

  render() {
    return (
        <div className="App">
            <DogGallery/>
        </div>
    );
  }
}

export default App;
