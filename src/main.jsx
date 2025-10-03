import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Confetti from 'react-confetti-boom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Confetti particleCount={800} colors={['#f3856a', '#ffc14d', '#28e791']} />
    <App />
  </React.StrictMode>,
)
