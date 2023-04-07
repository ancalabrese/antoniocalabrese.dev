import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

const trackingID = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" ? null : 'UA-158221881-1';
ReactGA.initialize(trackingID);
const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container)
root.render(<React.StrictMode>
  <App />
</React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
