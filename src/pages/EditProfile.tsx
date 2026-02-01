import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUser, FaCamera, FaLock, FaKey, FaGlobe, FaExclamationCircle } from 'react-icons/fa';
import { MdEmail, MdEdit, MdDescription } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import DashboardLayout from '../components/layouts/DashboardLayout';
import LoadingState from '../components/ui/LoadingState';
import ConfirmModal from '../components/ConfirmModal';
import type { UserProfile } from '../models/User';
import { validatePassword } from '../utils/validators';
//import api from '../services/api';
import userService from '../services/userService';
import { changeLanguage } from 'i18next';

// Tipos MIME permitidos
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
// Tamaño máximo (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024; 

// Catálogo de Avatares Predefinidos (Puedes usar imágenes locales en /public/assets/avatars/...)
const AVATAR_PRESETS = [
	"/assets/avatars/dragon.png",
	"/assets/avatars/rogue.png",
	"/assets/avatars/queen.png",
	"/assets/avatars/sorceress.png",
	"/assets/avatars/warrior.png",
	"/assets/avatars/wizard.png"
];

type ProfileFormState = Pick<UserProfile, 'username' | 'email' | 'bio' | 'language' | 'avatar'> & {
    avatarFile?: File;
    newPassword: string;
    confirmPassword: string;
};

const EditProfile = () => {
    const { t, i18n } = useTranslation(); 
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<ProfileFormState | null>(null);
    
    // Estados de error específicos
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [avatarError, setAvatarError] = useState<string | null>(null);
    
    const [showSuccessModal, setShowSuccessModal] = useState(false);

	const iconSize = 20;

    /* 1. Fetch Data */
    useEffect(() => {
        const fetchUserData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));

            const storedLang = localStorage.getItem('lang') as 'en' | 'es' | 'ca';
            const currentLang = storedLang || (i18n.language as 'en' | 'es' | 'ca') || 'en';

            const mockData: UserProfile = {
                id: 1,
                username: "Miriam",
                email: "miriam@student.42.fr",
                avatar: "", 
                bio: "",
                status: 'online',
                language: currentLang, 
                stats: { wins: 0, losses: 0, gamesPlayed: 0, winRate: 0 },
                history: []
            };

            setFormData({
                username: mockData.username,
                email: mockData.email || "",
                avatar: mockData.avatar || "",
                bio: mockData.bio || "",
                language: mockData.language || "en",
                newPassword: "",
                confirmPassword: ""
            });
            
            if (mockData.language && i18n.language !== mockData.language) {
                i18n.changeLanguage(mockData.language);
            }

            setIsLoading(false);
        };

        fetchUserData();
    }, [i18n.language]);

    /* 2. Handlers */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? { ...prev, [name]: value } : null);
        if (name === 'newPassword' || name === 'confirmPassword') setPasswordError(null);
		if (name === 'language')
		{
			changeLanguage(value);
			localStorage.setItem('lang', value);
		}
    };

    // --- MANEJO DE SUBIDA DE ARCHIVO (CON VALIDACIÓN) ---
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        setAvatarError(null); // Limpiar errores previos

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // 1. Validar Tipo
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setAvatarError(t('edit_profile.avatar_error_file'));
                return;
            }

            // 2. Validar Tamaño
            if (file.size > MAX_FILE_SIZE) {
                setAvatarError(t('edit_profile.avatar_error_size'));
                return;
            }

            // Si pasa validación, previsualizamos y guardamos el File
            const previewUrl = URL.createObjectURL(file);
            setFormData(prev => prev ? { 
                ...prev, 
                avatarFile: file, 
                avatar: previewUrl 
            } : null);
        }
    };

    // --- SELECCIÓN DE PRESET (CATÁLOGO) ---
    const handleSelectPreset = (presetUrl: string) => {
        setAvatarError(null);
        setFormData(prev => prev ? {
            ...prev,
            avatar: presetUrl,
            avatarFile: undefined // Importante: Limpiamos el File porque ha elegido una URL
        } : null);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData) return;

        // Validación Password
        if (formData.newPassword) {
            const validationError = validatePassword(formData.newPassword, t);
            if (validationError) {
                setPasswordError(validationError);
                return;
            }
            if (formData.newPassword !== formData.confirmPassword) {
                setPasswordError(t('validation.passwords_match'));
                return;
            }
        }

        setIsSaving(true);
        
        // --- LÓGICA DE ENVÍO AL BACKEND (Simulada) ---
        console.log("Enviando datos...", formData);
        // NOTA: Si formData.avatarFile existe, enviaré un FormData con el archivo.
        // Si no existe pero formData.avatar tiene valor, enviaré la URL del preset.

		// Simulación de retardo
        await new Promise(resolve => setTimeout(resolve, 1000));

		/**************************/
		// Cuando tenga la BBDD guardaré los datos reales
		// LÓGICA DE BACKEND (Ahora compilará gracias al Mock y al tipado)
        try {
            // 1. Tipamos explícitamente el payload para que acepte 'avatar' después
            interface UpdatePayload {
                username: string;
                bio?: string;
                language?: string;
                password?: string;
                avatar?: string;
            }

            // const payload: UpdatePayload = {
            //     username: formData.username,
            //     bio: formData.bio,
            //     language: formData.language,
            //     // Si hay password nueva, la incluyes
            //     ...(formData.newPassword ? { password: formData.newPassword } : {})
            // };

            // 2. Gestión de Avatar
            // if (formData.avatarFile) {
            //     // Si hay fichero, lo subimos primero (falso upload)
            //     await userService.uploadAvatar(formData.avatarFile);
            //     // Nota: Normalmente el upload devuelve la URL, que asignarías a payload.avatar
            // } 
            // else if (formData.avatar) {
            //     // Si es un preset (string), lo metemos al payload
            //     payload.avatar = formData.avatar;
            // }

            // // 3. Update final (falso update)
            // await userService.updateProfile(payload);

		 	//Mostramos el modal de éxito
        		setShowSuccessModal(true);

        } catch (error) {
            setIsSaving(false);
            console.error("Error al guardar:", error);
            // Aquí retornarías para no mostrar el modal de éxito si falló
            return; 
        }
		finally {
            // Terminamos el estado de carga pase lo que pase
            setIsSaving(false);
        }
		/**************************************/

        // if (formData.language && formData.language !== i18n.language) {
        //     i18n.changeLanguage(formData.language);
        //     localStorage.setItem('lang', formData.language);
        // }

        setIsSaving(false);
        setShowSuccessModal(true);
    };

    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        navigate('/profile');
    };

	const handleCancelClose = () => {
        setShowSuccessModal(false);
        navigate('/edit_profile');
    };

	/* Simulación de carga */
    if (isLoading) return <DashboardLayout isCentered={true}><LoadingState message={t('common.loading')} /></DashboardLayout>;
	/* Protección contra formData nulo */
    if (!formData) return null;

    return (
        <DashboardLayout isCentered={false}>
            <div className="max-w-2xl mx-auto w-full animate-fade-in-up pb-20">
                
                <div className="mb-8 border-b border-white/10 pb-4">
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <FaUser className="text-brand-500" /> {t('profile.edit_profile')}
                    </h1>
                    <p className="text-slate-400 mt-2 text-sm">
                        {t('edit_profile.subtitle') || "Personaliza tu identidad y seguridad"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* --- CARD 1: IDENTIDAD PÚBLICA --- */}
                    <div className="glass-panel p-6 md:p-8 space-y-8">
                        
                        {/* SECCIÓN AVATAR */}
                        <div className="flex flex-col items-center gap-6">
                            
                            {/* Previsualización Principal */}
                            <div className="relative group cursor-pointer">
                                <div className={`w-32 h-32 rounded-full border-4 ${avatarError ? 'border-danger' : 'border-dark-800'} shadow-2xl overflow-hidden bg-dark-900`}>
                                    {formData.avatar ? (
                                        <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-600"><FaUser size={48} /></div>
                                    )}
                                </div>
                                {/* Input Upload Oculto sobre la imagen */}
                                <input type="file" accept="image/png, image/jpeg, image/webp" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" onChange={handleImageUpload} />
                                
                                {/* Overlay Icono */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none rounded-full">
                                    <FaCamera className="text-white text-2xl" />
                                </div>
                            </div>

                            {/* Mensaje de Error de Avatar */}
                            {avatarError && (
                                <p className="text-danger text-xs flex items-center gap-1 animate-pulse">
                                    <FaExclamationCircle /> {avatarError}
                                </p>
                            )}

                            {/* Separador */}
                            <div className="w-full flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider">
                                <div className="h-px bg-white/10 flex-1"></div>
                                <span>{t('edit_profile.choose_avatar')}</span>
                                <div className="h-px bg-white/10 flex-1"></div>
                            </div>

                            {/* Catálogo de Avatares */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {AVATAR_PRESETS.map((preset, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelectPreset(preset)}
                                        className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all hover:scale-110 ${formData.avatar === preset ? 'border-brand-500 shadow-[0_0_10px_rgba(var(--color-brand-500),0.5)]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    >
                                        <img src={preset} alt={`Avatar ${index}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Resto de Inputs (Username, etc) */}
                        <div className="grid gap-6 pt-4 border-t border-white/5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><MdEdit className="text-brand-500" size={iconSize}/> {t('common.username')}</label>
                                <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="input-nexus w-full" placeholder={t('common.username')} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><MdEmail className="text-slate-500" size={iconSize}/> {t('common.email')}</label>
                                <input type="email" name="email" value={formData.email} readOnly className="input-nexus w-full bg-black/20 text-slate-500 border-white/5 cursor-not-allowed" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><MdDescription className="text-brand-500" size={iconSize}/> {t('edit_profile.bio') || "Biografía"}</label>
                                <textarea name="bio" value={formData.bio || ""} onChange={handleInputChange} className="input-nexus w-full h-24 resize-none py-2" maxLength={150} />
                                <div className="text-right text-xs text-slate-500">{(formData.bio || "").length}/150</div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><FaGlobe className="text-brand-500" size={iconSize}/> {t('edit_profile.language') || "Idioma"}</label>
                                <div className="relative">
                                    <select name="language" value={formData.language} onChange={handleInputChange} className="input-nexus w-full appearance-none cursor-pointer truncate pr-10">
                                        <option className="bg-slate-800 text-white" value="en">{t('edit_profile.english') }</option>
                                        <option className="bg-slate-800 text-white" value="es">{t('edit_profile.spanish') }</option>
                                        <option className="bg-slate-800 text-white" value="ca">{t('edit_profile.catalan') }</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs"><TiArrowSortedDown size={iconSize}/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CARD 2: SEGURIDAD --- */}
                    <div className="glass-panel p-6 md:p-8 space-y-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-4">
                            <FaLock className="text-brand-500" size={iconSize}/> {t('edit_profile.security') || "Seguridad"}
                        </h3>
                        {passwordError && (
                            <div className="bg-danger/10 border border-danger/20 text-danger text-sm p-3 rounded-lg animate-pulse border-l-4 border-l-danger">
                                {passwordError}
                            </div>
                        )}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><FaKey className="text-slate-500" /> {t('edit_profile.new_password') || "Nueva Contraseña"}</label>
                                <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className={`input-nexus w-full ${passwordError ? 'border-danger/50 focus:border-danger' : ''}`} autoComplete="new-password" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2"><FaKey className="text-slate-500" /> {t('edit_profile.confirm_new_password') || "Confirmar Contraseña"}</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`input-nexus w-full ${passwordError ? 'border-danger/50 focus:border-danger' : ''}`} autoComplete="new-password" />
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 pt-4">
                        <button type="button" onClick={() => navigate('/profile')} className="btn-secondary px-6 py-3 rounded-xl font-bold">Cancelar</button>
                        <button type="submit" disabled={isSaving} className={`btn-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}>
                            {isSaving ? <>{t('edit_profile.saving')}</> : <> {t('edit_profile.save') }</>}
                        </button>
                    </div>
                </form>

                {/* MODAL */}
                <ConfirmModal
                    isOpen={showSuccessModal}
                    title={t('edit_profile.save') }
                    message={t('edit_profile.sure') }
                    confirmText={t('common.accept')}
                    cancelText={t('common.decline')}
                    onConfirm={handleSuccessClose}
                    onCancel={handleCancelClose}
                />
            </div>
        </DashboardLayout>
    );
};

export default EditProfile;