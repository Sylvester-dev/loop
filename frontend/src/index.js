import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  
    <MoralisProvider
      appId="TQdIIAVOGQOJkzynTByYELAoQ3tkAmF9J2e6LAN9"
      serverUrl="https://v6rgzlubwwgv.usemoralis.com:2053/server"
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
