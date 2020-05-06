import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';
import setupMapAPI from './helper/map.js';

const imageGallery = document.createElement('div');
imageGallery.id = 'root';
document.body.append(imageGallery);

const popUp = document.createElement('div');
popUp.id = 'popup';
document.body.append(popUp);

setupMapAPI();

ReactDOM.render(<Main/>, document.getElementById('root'));