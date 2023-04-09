import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app'

const dev = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
const container = document.getElementById('root');


const firebaseConfig = {
  apiKey: "AIzaSyAnE1IYpfDkI11HREb3bopHHdZt4xtjnZM",
  authDomain: "personalwebsite-eaf2d.firebaseapp.com",
  databaseURL: "https://personalwebsite-eaf2d.firebaseio.com",
  projectId: "personalwebsite-eaf2d",
  storageBucket: "personalwebsite-eaf2d.appspot.com",
  messagingSenderId: "451705051635",
  appId: "1:451705051635:web:4eebc4f1949c232bcf9a86",
  measurementId: "G-7KENTQ95DF"
};

const app = initializeApp(firebaseConfig);
if (dev) { getAnalytics(app) }

const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <App firebaseApp={app} />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
