
import api from './api';
import type { UserProfile } from '../models/User';

// Definimos la interfaz del Payload aquí para reutilizarla
export interface UpdateProfilePayload {
    username: string;
    bio?: string;
    language?: string;
    password?: string;
    avatar?: string; // URL string
}

// const userService = {
//     /**
//      * Obtiene el perfil del usuario logueado
//      */
//     getProfile: async (): Promise<UserProfile> => {
//         const response = await api.get('/users/me');
//         return response.data;
//     },

//     /**
//      * Sube un archivo de imagen al servidor.
//      * Retorna la URL de la imagen subida.
//      */
//     uploadAvatar: async (file: File): Promise<string> => {
//         const formData = new FormData();
//         formData.append('file', file); // 'file' debe coincidir con lo que espera el backend (NestJS suele usar 'file')

//         const response = await api.post('/users/upload-avatar', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
        
//         // Asumimos que el backend devuelve { url: "..." } o directamente el string
//         return response.data.url; 
//     },

//     /**
//      * Actualiza los datos del usuario (texto + avatar url)
//      */
//     updateProfile: async (data: UpdateProfilePayload): Promise<UserProfile> => {
//         // Usamos PATCH porque solemos actualizar parcialmente
//         const response = await api.patch('/users/me', data);
//         return response.data;
//     }
// };
const userService = {
	
	consoleLog: () => {
		console.log("Componente funcionando");
	}
	
}
export default userService;