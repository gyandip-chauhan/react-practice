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
    <Header name="Gyandip"/>
  </React.StrictMode>
);

const displayCurrentTime = ReactDOM.createRoot(document.getElementById('displayCurrentTime'))

function tick() {
  // <h2>Current Time is new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}.</h2>
  const element = (
    <div className="currentTime">
      <h2>Current Time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  displayCurrentTime.render(element);
}

setInterval(tick, 1000);

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
