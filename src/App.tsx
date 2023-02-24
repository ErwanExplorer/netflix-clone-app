import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './components/Video';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
