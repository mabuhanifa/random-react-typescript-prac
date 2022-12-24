import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NewProvider } from './components/NewContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewProvider>
      <App />
    </NewProvider>
  </React.StrictMode>
)
