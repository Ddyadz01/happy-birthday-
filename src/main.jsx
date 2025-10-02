import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Confetti from 'react-confetti-boom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Confetti particleCount={80} />
  </React.StrictMode>,
)
