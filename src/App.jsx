import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
// import AuthProvider from './authContext';
import { Provider as ReduxProvider } from 'react-redux';
import store from './Redux/store';
import './App.css';


function App() {

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<SignUp />} />
          <Route path='/login' element={<Login />}>
          <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ReduxProvider>

  )
};

export default App;
