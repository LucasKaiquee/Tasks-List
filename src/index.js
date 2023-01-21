import React from 'react'
import ReactDOM from 'react-dom/client'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import reportWebVitals from './reportWebVitals'

import App from './App'

const options = {
  position: positions.BUTTON_CENTER,
  timeout: 2500,
  offset: '30px',
  trasition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} { ...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
