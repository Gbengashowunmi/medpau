import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";



// Initialize Google Analytics with your tracking ID
ReactGA.initialize("G-G19CS5JWZ8");

// Create a history object
const history = createBrowserHistory();

// Send a pageview to Google Analytics for each page change
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the page title
  ReactGA.pageview(location.pathname + location.search); // Send a pageview to Google Analytics
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

