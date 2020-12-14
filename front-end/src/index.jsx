import { StrictMode } from "react"
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './App.jsx';  
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('site')
);
