import React, { createContext, useState } from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Login from './components/Login';
import Details from './components/Details';

const UserContext=createContext(null);

export default function App(){
  const [isUserAuth, setIsUserAuth]=useState(null);
  return (
    <>
    <UserContext.Provider value={{isUserAuth, setIsUserAuth}}>
    <BrowserRouter>
    <Routes>
    
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
         
        </Routes>
        
        </BrowserRouter>
        </UserContext.Provider>
    </>
  );
}

export {UserContext};

