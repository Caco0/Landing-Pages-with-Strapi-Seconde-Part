import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global-styles.js'
import Home from './templates/App/Index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Home />
    <GlobalStyles/>
  </React.StrictMode>,
)
