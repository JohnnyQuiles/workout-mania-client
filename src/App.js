import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import About from './Pages/About';
// import SignUp from './Pages/SignUp'
// import Login from './Pages/Login';
// import Dashboard from './Pages/Dashboard';
// import AuthProvider from './authContext';

import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} />
          <Route path='create' element={<SignUp />} />

          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter >
  )
};

export default App;
