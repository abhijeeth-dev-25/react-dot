import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { AuthContext } from './contextApi/AuthContext'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <AppRoutes />
  </AuthContext>
)
