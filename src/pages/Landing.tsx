import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import nexusIcon from '../assets/NexusNineIcon.png';
import Footer from '../components/Footer';
import LandingNavbar from '../components/LandingNavbar';
import Separator from '../components/Separator';

const Landing = () => {
	const { t, i18n } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false); //falta BBDD

	return (
		<div className="min-h-screen bg-dark-900 text-white font-sans overflow-x-hidden flex flex-col relative">

			{/* Two Lines to separate NavBar and Footer */}
			<Separator />

			{/* Navbar */}
			<LandingNavbar />

			{/* Main Content */}
			<main className="grow flex flex-col items-center justify-center text-center px-4 relative z-10 mt-24">
				{/* Title Group */}
				<h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
					NEXUS NINE
				</h1>
				<h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-8">
					CARD GAME
				</h2>

				{/* Subtitle */}
				<p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
					{t('landing.subtitle')}
				</p>

				{/* CTA Button */}
				<Link to="/login" className="group relative">
					<div className="absolute -inset-1 bg-brand-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
					<button className="relative w-full md:w-auto px-12 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-xl">
						{t('landing.start')}
					</button>
				</Link>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Landing;