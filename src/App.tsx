import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './views/landing';
import Home from './views/home';
import Timer from './views/timer';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

