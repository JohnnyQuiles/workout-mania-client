import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AuthProvider from './authContext';


render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='create' element={<SignUp />}/>

        <Route path='login' element={<Login />}/>
        <Route path='dashboard' element={<Dashboard />}/>
        
      </Routes>


    </AuthProvider>
  </BrowserRouter >,
  document.getElementById('root')
);
