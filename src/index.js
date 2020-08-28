import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const express = require('express')
const app = express();
const PORT = process.env.PORT || 80
app.listen(PORT)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
