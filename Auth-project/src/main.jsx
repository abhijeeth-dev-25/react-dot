import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthContextProvider } from './contextApi/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <AppRoutes />
    </AuthContextProvider>
)
