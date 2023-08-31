import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.hydrate(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>,
  document.getElementById('root')
)