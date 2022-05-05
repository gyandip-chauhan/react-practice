import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Header.css';
import Header from './Header';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const rootHeader = ReactDOM.createRoot(document.getElementById('rootHeader'))
rootHeader.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootFooter = ReactDOM.createRoot(document.getElementById('rootFooter'))
rootFooter.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
