import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUp from './Pages/SignUp'
import CreateUser from './Pages/CreateUser';
import Submitted from './Pages/Submitted';
import Login from './Pages/Login';
import LoginSubmit from './Pages/LoginSubmit';
import AuthProvider from './authContext';

render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='create' element={<SignUp />}>
          <Route path='createuser' element={<CreateUser />} />
          <Route path='submitted' element={<Submitted />} />
        </Route>

        <Route path='login' element={<Login />}>
          <Route path='loginsubmit' element={<LoginSubmit />} />
        </Route>

      </Routes>

    </AuthProvider>
  </BrowserRouter >,
  document.getElementById('root')
);
