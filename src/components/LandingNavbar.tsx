import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const LandingNavbar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full h-24 bg-dark-900/95 backdrop-blur-md fixed top-0 z-50 transition-all duration-300 border-b border-white/5">
            <div className="w-full h-full flex justify-between items-center px-6 md:px-12">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <Logo className="w-8 h-8" />
                    <span className="font-bold text-lg tracking-wide hidden md:block group-hover:text-brand-500 transition-colors">NEXUS NINE</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    <LanguageSelector />
                    <div className="h-4 w-px bg-slate-700"></div>
                    <Link to="/" className="text-white font-semibold relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-500 after:shadow-[0_0_10px_#3B82F6]">{t('landing.home')}</Link>
                    <span className="text-slate-600">|</span>
                    <Link to="/login" className="text-slate-300 hover:text-white transition-colors font-medium">{t('landing.login')}</Link>
                    <span className="text-slate-600">|</span>
                    <Link to="/register" className="text-slate-300 hover:text-white transition-colors font-medium">{t('landing.register')}</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-slate-300 hover:text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-24 left-0 w-full bg-dark-900 border-b border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-down">
                    {/* Enlace Inicio explícito para consistencia */}
                    <Link to="/" className="p-3 rounded-lg bg-brand-500 text-white font-medium text-center" onClick={() => setIsMenuOpen(false)}>
                        {t('landing.home')}
                    </Link>
                    
                    <Link to="/login" className="p-3 rounded-lg hover:bg-white/5 text-slate-300 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>
                        {t('landing.login')}
                    </Link>
                    
                    <Link to="/register" className="p-3 rounded-lg hover:bg-white/5 text-slate-300 text-center transition-colors" onClick={() => setIsMenuOpen(false)}>
                        {t('landing.register')}
                    </Link>

                    <div className="border-t border-white/10 pt-4 mt-2 flex justify-center">
                        <LanguageSelector />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default LandingNavbar;