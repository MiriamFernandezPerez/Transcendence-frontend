import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LandingNavbar from '../components/LandingNavbar';

const Terms = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen bg-dark-900 text-white font-sans flex flex-col overflow-x-hidden">
			
			<LandingNavbar />

			{/* Terms of Service */}
			<main className="flex-1 px-4 sm:px-6 lg:px-8 pt-6 pb-10 mt-24">
				<div className="mx-auto max-w-3xl text-left">

					{/* Title */}
					<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
						📜 {t('footer.terms')}
					</h2>

					{/* Section 1 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						1. {t('terms.1')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('terms.1text1')}
					</p>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.1text2')}
					</p>

					{/* Section 2 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						2. {t('terms.2')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('terms.2text1')}
					</p>
					
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.21')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.22')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.23')}
						</li>
					</ul>

					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.2text2')}
					</p>


					{/* Section 3 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						3. {t('terms.3')}
					</h3>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.31')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.32')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
							{t('terms.33')}
						</li>
					</ul>


					{/* Section 4 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						4. {t('terms.4')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('terms.4text1')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.41')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.42')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.43')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.44')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.45')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('terms.46')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.4text2')}
					</p>

					{/* Section 5 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						5. {t('terms.5')}
					</h3>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.51')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.52')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
							{t('terms.53')}
						</li>
					</ul>

					{/* Section 6 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						6. {t('terms.6')}
					</h3>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.61')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.62')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
							{t('terms.63')}
						</li>
					</ul>

					{/* Section 7 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						7. {t('terms.7')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
						{t('terms.7text1')}
					</p>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('terms.7text2')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.71')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.72')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
							{t('terms.73')}
						</li>
					</ul>
					

					{/* Section 8 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						8. {t('terms.8')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('terms.8text1')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.81')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('terms.82')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.8text2')}
					</p>

					{/* Section 9 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						9. {t('terms.9')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.9text')}
					</p>

					{/* Section 10 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						10. {t('terms.10')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('terms.10text')}
					</p>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Terms;
