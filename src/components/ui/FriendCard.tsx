import React from 'react';
import { FaUser, FaGamepad, FaTrash } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";

interface FriendCardProps {
    username: string;
    variant?: 'online' | 'offline' | 'playing';
    onProfileClick?: () => void;
    onInviteClick?: () => void;
    onRemoveClick?: () => void;
}

const FriendCard = ({ username, variant = 'offline', onProfileClick, onInviteClick, onRemoveClick }: FriendCardProps) => {
    
    const statusConfig = {
        online:  { ring: "border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]", text: "text-green-400", label: "En línea" },
        offline: { ring: "border-slate-600", text: "text-slate-500", label: "Desconectado" },
        playing: { ring: "border-brand-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]", text: "text-brand-400", label: "Jugando..." }
    };

    const currentStatus = statusConfig[variant];
    const isPlayable = variant === 'online';

    return (
        // USANDO CLASES REUTILIZABLES: glass-panel y glass-panel-hover
        <div className="group relative flex flex-col md:flex-row items-center justify-between p-4 gap-4 md:gap-0 glass-panel glass-panel-hover">
            
            {/* IZQUIERDA: Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className={`relative p-0.5 rounded-full border-2 ${currentStatus.ring} transition-all duration-300 shrink-0`}>
                    <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-slate-300">
                        <FaUser size={22} />
                    </div>
                </div>
                <div className="flex flex-col text-left">
                    <h3 className="text-lg font-bold text-white tracking-wide font-sans group-hover:text-brand-400 transition-colors">
                        {username}
                    </h3>
                    <span className={`text-xs uppercase tracking-wider font-bold ${currentStatus.text}`}>
                        {currentStatus.label}
                    </span>
                </div>
            </div>

            {/* DERECHA: Botones */}
            <div className="flex items-center justify-around md:justify-end gap-3 w-full md:w-auto border-t border-white/5 pt-4 md:border-0 md:pt-0">
                
                {/* Botón Jugar (Usa .btn-primary o .btn-disabled) */}
                <button 
                    onClick={isPlayable ? onInviteClick : undefined}
                    disabled={!isPlayable}
                    title={isPlayable ? "Invitar a jugar" : "No disponible"}
                    className={`btn-icon ${isPlayable ? "btn-primary" : "btn-disabled"}`}
                >
                    <FaGamepad size={24} />
                </button>

                {/* Botón Perfil (Usa .btn-secondary) */}
                <button onClick={onProfileClick} title="Ver Perfil" className="btn-icon btn-secondary">
                    <MdPersonSearch size={24} />
                </button>

                {/* Separador */}
                <div className="hidden md:block h-8 w-px bg-white/10 mx-1"></div>

                {/* Botón Eliminar (Usa .btn-danger) */}
                <button onClick={onRemoveClick} title="Eliminar amigo" className="btn-icon btn-danger">
                    <FaTrash size={22} />
                </button>
            </div>
        </div>
    );
};

export default FriendCard;