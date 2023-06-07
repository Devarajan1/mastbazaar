import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import Terms from './terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Terms" element={<Terms/>} />
      </Routes>
    </Router>
  );
}

export default App;
