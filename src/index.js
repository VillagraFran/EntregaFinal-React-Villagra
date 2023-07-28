import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/cartContext';

const firebaseConfig = {
  apiKey: "AIzaSyBUQI2VLUEBV2jBHW4WWluLs3W4VSGWAFE",
  authDomain: "e-commerce-40379.firebaseapp.com",
  projectId: "e-commerce-40379",
  storageBucket: "e-commerce-40379.appspot.com",
  messagingSenderId: "688857694201",
  appId: "1:688857694201:web:8fdf21c5f46afed50b8728"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
