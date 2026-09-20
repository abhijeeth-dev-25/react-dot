
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreContextProvider } from './contextApi/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
    <StoreContextProvider>
        <App />
    </StoreContextProvider>
)
