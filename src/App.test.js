import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DogGallery from "./components/DogGallery";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Dog Gallery without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DogGallery />, div);
    ReactDOM.unmountComponentAtNode(div);
});


