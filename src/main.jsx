import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authenticator } from '@aws-amplify/ui-react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
)
