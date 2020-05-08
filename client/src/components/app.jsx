import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ImageGallery from './image/imageGallery.jsx';

const initial = { imageURLs: [], tagsProcessed: [] };

const App = () => {
  const [home, setHome] = useState(initial);

  useEffect(() => {
    const pathname = window.location.pathname;
    fetch(`${pathname}/images`)
    .then(response => response.json())
    .then(home => setHome(home))
    .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Route path='/homes/:id' children={<ImageGallery home={home} />} />
    </Router>
  );
};

export default App;