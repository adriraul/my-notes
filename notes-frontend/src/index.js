import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import App from './App';
import './index.css';

ReactDOM.render(
  <Router> {/* Envuelve la App con BrowserRouter */}
    <link rel="icon" type="image/jpg" href="../assets/logo.jpg" />
    <App />
  </Router>,
  document.getElementById('root')
);