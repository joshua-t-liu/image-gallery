import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';

const imageGallery = document.createElement('div');
document.body.prepend(imageGallery);

ReactDOM.render((
  <Router>
    <App pathname={window.location.pathname} />
  </Router>
  ), imageGallery);
