import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    // 1. Mientra se verifica la cookie/sesión, se mostrará un spinner o nada
    if (isLoading) {
        return <div className="min-h-screen bg-dark-900 flex items-center justify-center text-white">Cargando...</div>; 
    }

    // 2. Si terminó de cargar y no está autenticado, pa fuera (al login)
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // 3. Si está autenticado, renderiza las rutas hijas (Outlet)
    return <Outlet />;
};

export default ProtectedRoute;