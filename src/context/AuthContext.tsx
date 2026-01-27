import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, AuthContextType } from './Auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkSession = async () => {
            try {

				// Aqui iría la llamada a la API para verificar la sesión y me devuelva una Cookie HTTP-Only o un Token JWT.
                // Mientras no tengo backend hago simulación de retraso de red como si estuviera llamando a una API
                await new Promise(resolve => setTimeout(resolve, 500)); 
                
                // Empezamos sin sesión para probar el login manual si esta comentado es para evitar deslogueos automáticos
                //setUser(null); 

            } catch (error) {
                console.log("No hay sesión activa");
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, []);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated: !! user, 
            isLoading, 
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};

export default AuthProvider;