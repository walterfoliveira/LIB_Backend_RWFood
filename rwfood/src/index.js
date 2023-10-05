import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GlobalProvider } from './contexts/GlobalContext'
import { SignalRContext } from './contexts/SignalRContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    <SignalRContext>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </SignalRContext>

    // </React.StrictMode>
)
