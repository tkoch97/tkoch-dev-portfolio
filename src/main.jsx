import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './containers/Home/index.jsx'
import './i18n/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
