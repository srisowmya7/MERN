import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Router>
<Navbar/>
<Routes>
<Route path="/about" element={<h1>About</h1>}/>
<Route path="/register" element={<register/>}/>
<Route path="/login" element={<login/>}/>


</Routes>
</Router>
</div>
);