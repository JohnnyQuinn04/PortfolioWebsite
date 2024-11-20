import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import App from './App'; 

// Rendering the App component into the 'root' div in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
