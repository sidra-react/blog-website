import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Profile from './Profile';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Pa2 from './Pa2';
import Signup from './components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <Routes>

        <Route path="/Ab" element={<About />} />
        <Route path="/op" element={<Navbar />} />
        <Route path="/opo" element={<Pa2 />} />
        <Route path="/home" element={<Home />} />
          <Route path="/sig" element={<Signup />} />
          <Route path="/prof" element={<Profile />} />
          <Route path="/cont" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();