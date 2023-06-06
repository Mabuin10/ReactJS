import React from 'react';
import ReactDOM from 'react-dom/client';
// import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const firebaseConfig = {
//   apiKey: "AIzaSyDl5-eIgNo4d8b80qVsNxyzP9j7Bj0s2tQ",
//   authDomain: "first-try-1fd2d.firebaseapp.com",
//   projectId: "first-try-1fd2d",
//   storageBucket: "first-try-1fd2d.appspot.com",
//   messagingSenderId: "273489453382",
//   appId: "1:273489453382:web:c774cfe627c77ca946c547"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
