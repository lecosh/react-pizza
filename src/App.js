import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
