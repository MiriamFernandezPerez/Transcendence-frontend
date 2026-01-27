export interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    // Añadir mas campos cuando sepamos los que necesitamos
}

export interface AuthContextType {
	/* Current user or null if not authenticated */
    user: User | null;
	/* Authentication state true or false*/
    isAuthenticated: boolean;
	/* Loading state to verify the cookie on reload */ 
    isLoading: boolean; 
	/* This will be the API call to log in */
    login: (userData: User) => void;
	/* This will be the API call to log out */
    logout: () => void;
}