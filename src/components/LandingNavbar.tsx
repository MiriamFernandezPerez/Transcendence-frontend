	import { useState } from 'react';
	import { useTranslation } from 'react-i18next';
	import { Link } from 'react-router-dom';
	import Logo from './Logo';
	import LanguageSelector from './LanguageSelector';

	const LandingNavbar = () => {
		const { t } = useTranslation();
		const [isMenuOpen, setIsMenuOpen] = useState(false);

		return (
			<nav className="fixed top-0 left-0 w-full h-24 z-50  bg-dark-900">
				<div className="flex justify-between items-center px-6 py-6 md:px-12">
					{/* Logo Section */}
					<Link to="/" className="flex items-center gap-3 group">
						<div className="p-2 bg-dark-800/50 rounded-lg border border-white/10 shadow-glow transition-transform group-hover:scale-105">
							<Logo className="w-8 h-8" />
						</div>
						<span className="font-bold text-lg tracking-wide hidden md:block group-hover:text-brand-500 transition-colors">NEXUS NINE</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-6">
						<LanguageSelector />

						<div className="h-4 w-px bg-slate-700"></div>
						<Link to="/login" className="text-slate-300 hover:text-white transition-colors">{t('landing.login')}</Link>
						<span className="text-slate-600">|</span>
						<Link to="/register" className="text-slate-300 hover:text-white transition-colors">{t('landing.register')}</Link>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
						</svg>
					</button>
				</div>

				{/* Mobile Menu Overlay  */}
				{isMenuOpen && (
					<div className="absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-md border-b border-white/10 z-20 p-4 flex flex-col gap-4 md:hidden shadow-2xl">
						<Link to="/login" className="text-center py-3 hover:bg-white/5 rounded-lg transition-colors">{t('landing.login')}</Link>
						<Link to="/register" className="text-center py-3 hover:bg-white/5 rounded-lg transition-colors">{t('landing.register')}</Link>

						<div className="flex justify-center pt-4 border-t border-white/10">
							<LanguageSelector />
						</div>
					</div>
				)}
			</nav>
		);
	};

	export default LandingNavbar;