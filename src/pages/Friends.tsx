import { useTranslation } from 'react-i18next';
import { FaSearch } from "react-icons/fa";
import DashboardLayout from '../components/layouts/DashboardLayout';
import FriendCard from '../components/ui/FriendCard';

const Friends = () => {
    const { t } = useTranslation();
    
    return (
        <DashboardLayout isCentered={false}>
            
            <div className="max-w-5xl mx-auto w-full animate-fade-in-up px-4">
                
                {/* Header + Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-white/5 pb-8">
                    
                    {/* Title */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-white tracking-tight drop-shadow-md">
                            {t('friends.title')} <span className="text-brand-500 text-2xl align-top ml-1">(4)</span>
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">Gestiona tus aliados y rivales</p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-96 group">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-500 transition-colors" />
                        <input
                            type="text"
                            placeholder={t('friends.search_placeholder')}
                            /* Refactor: Use standard input class .input-nexus defined in CSS */
                            className="input-nexus pl-11"
                        />
                    </div>
                </div>

                {/* FRIENDS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-20">
                    
                    {/* 1. Miriam (Online - The blue play button will be visible) */}
                    <FriendCard
                        username="Miriam"
                        variant="online"
                        onInviteClick={() => console.log("Invitar a Miriam")}
                        onProfileClick={() => console.log("Perfil Miriam")}
                        onRemoveClick={() => console.log("Eliminar Miriam")}
                    />
                    
                    {/* 2. Ivan (Playing - The play button will NOT be available, only profile and delete) */}
                    <FriendCard
                        username="Ivan"
                        variant="playing"
                        onProfileClick={() => console.log("Perfil Ivan")}
                        onRemoveClick={() => console.log("Eliminar Ivan")}
                    />

                    {/* 3. Kevin (Online) */}
                    <FriendCard
                        username="Kevin"
                        variant="online"
                        onInviteClick={() => console.log("Invitar a Kevin")}
                    />

                    {/* 4. David (Offline) */}
                    <FriendCard
                        username="David"
                        variant="offline"
                    />
                </div>

            </div>

        </DashboardLayout>
    );
};

export default Friends;