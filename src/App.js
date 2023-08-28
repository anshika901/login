
import './App.css';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Navbar from './components/navbar';
import Login from './components/login';

function App() {
return (
    <div>
       <div className="navbar-container">
         <Navbar/>
       </div>
      <Login/>
  </div>
);
}
  

export default App;
