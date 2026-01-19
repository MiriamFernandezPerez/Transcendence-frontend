export interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    // Añadir mas campos cuando sepamos los que necesitamos
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean; // Creo una carga de espera para verificar la cookie al recargar
    login: (userData: User) => void; // Esta será la llamada a la API
    logout: () => void;
}