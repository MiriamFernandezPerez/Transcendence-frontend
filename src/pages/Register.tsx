// import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';

const Register = () => {
	const { t } = useTranslation();
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-dark-900 relative px-6">

			{/* Login Card (Glassmorphism) */}
			<div className="relative z-10 w-full max-w-md p-6 sm:p-8 bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">

				{/* Title & Logo */}
				<div className="text-center mb-8">
					<Link
						to="/"
						className="inline-flex items-center justify-center w-12 h-12" title="Back to LandingPage">
						<Logo />
					</Link>

					<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t('register.title')}</h2>
					<p className="text-slate-400 mt-2 text-sm">{t('register.subtitle')}</p>
				</div>

				<form className="space-y-4">
					{/* Username Field */}
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{t('register.username')}</label>
						<input
							type="text"
							placeholder="player1"
							className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-slate-700 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 placeholder-slate-500"/>
					</div>

					<div>
						<label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{t('register.email')}</label>
						<input
							type="email"
							placeholder="email@email.com"
							className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-slate-700 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 placeholder-slate-500"/>
					</div>

					<div className="mb-8">
						<label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{t('register.password')}</label>
						<input
							type="password"
							placeholder="••••••••"
							className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-slate-700 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 placeholder-slate-500"/>
					</div>

					<button
						type="submit" 
						className="w-full py-3.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:scale-[1.02]">
						{t('register.enter')}
					</button>
				</form>

				{/* Card Footer */}
				<div className="mt-6 text-center">
					<p className="text-slate-400 text-sm">
						{t('register.account')}{' '}
						<Link to="/login" className="text-brand-500 font-medium hover:text-brand-400 hover:underline transition-colors">
							{t('register.login')}
						</Link>
					</p>
				</div>
			</div>

			{/* Footer Legal */}
			<Footer className="w-full mt-8" />
		</div>
	);
};

export default Register;