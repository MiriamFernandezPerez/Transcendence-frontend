import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Icons
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
// Components
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const DashboardNavbar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /* Get current URL path to highlight active link on navbar*/
    const url = useLocation();
    /* On Desktop */
    const getPathDesktop = (path: string) => {
        return (
            url.pathname === path
            /* Active Link Style */
            ? "text-white font-semibold relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-500 after:shadow-[0_0_10px_#3B82F6]" 
            /* Inactive Link Style */
            : "text-slate-300 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]");
    }
    /* On Mobile */
    const getPathMobile = (path: string) => {
        return (
            url.pathname === path
            /* Active Link Style */
            ? "p-3 rounded-lg bg-brand-500 text-white font-medium text-center"
            /* Inactive Link Style */
            : "p-3 rounded-lg hover:bg-white/5 text-slate-300 text-center transition-colors");
    }
    

    return (
        <nav className="w-full h-24 bg-dark-900/95 backdrop-blur-md fixed top-0 z-50 transition-all duration-300 border-b border-white/5">
            <div className="w-full h-full flex justify-between items-center px-6 md:px-12">

                {/* Brand */}
                <Link to="/index" className="flex items-center gap-3 group">
                    <div className="p-1.5 bg-dark-800/50 rounded-lg border border-white/10 group-hover:border-brand-500/50 transition-colors">
                        <Logo className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-lg tracking-wider hidden md:block">NEXUS NINE</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Navigation Links */}
                    <Link to="/index" className={getPathDesktop("/index")}>
                        {t('navbar.dashboard')}
                    </Link>
                    <Link to="/friends" className={getPathDesktop("/friends")}>
                        {t('navbar.friends')}
                    </Link>
                    <Link to="/profile" className={getPathDesktop("/profile")}>
                        {t('navbar.profile')}
                    </Link>

                    <div className="h-6 w-px bg-white/10 mx-2"></div>

                    {/* System Actions */}
                    <div className="flex items-center gap-4">
                        <LanguageSelector />
                        
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-red-400 transition-all text-sm font-medium group">
                            <MdLogout className="group-hover:-translate-x-1 transition-transform" /> 
                            {t('navbar.logout')}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-slate-300 hover:text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-24 left-0 w-full bg-dark-900 border-b border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-down">
                    <Link to="/index" className={getPathMobile("/index")} onClick={() => setIsMenuOpen(false)}>
                        {t('navbar.dashboard')}
                    </Link>
                    
                    <Link to="/friends" className={getPathMobile("/friends")} onClick={() => setIsMenuOpen(false)}>
                        {t('navbar.friends')}
                    </Link>
                    
                    <Link to="/profile" className={getPathMobile("/profile")} onClick={() => setIsMenuOpen(false)}>
                        {t('navbar.profile')}
                    </Link>
                    
                    <div className="h-px bg-white/10 my-2"></div>
                    
                    <button className="p-1 w-full text-center text-red-400 hover:bg-red-500/10 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <MdLogout /> {t('navbar.logout')}
                    </button>

                    <div className="border-t border-white/10 pt-4 mt-2 flex justify-center">
                        <LanguageSelector />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default DashboardNavbar;