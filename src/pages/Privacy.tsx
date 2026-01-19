import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LandingNavbar from '../components/LandingNavbar';


const Privacy = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen bg-dark-900 text-white font-sans flex flex-col overflow-x-hidden">
			
			<LandingNavbar />

			{/* Privacy Policy */}
			<main className="flex-1 px-4 sm:px-6 lg:px-8 pt-6 pb-32 mt-24">
				<div className="mx-auto max-w-3xl text-left">

					{/* Title */}
					<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
						🔐 {t('footer.privacy')}
					</h2>

					{/* Section 1 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						1. {t('privacy.1')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.1text')}
					</p>

					{/* Section 2 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						2. {t('privacy.2')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.2text')}
					</p>
					{/* Section 2.1 */}
					<h4 className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						2.1 {t('privacy.21')}
					</h4>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.211')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.212')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.213')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('privacy.214')}
						</li>
					</ul>
					{/* Section 2.2 */}
					<h4 className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2 mt-3">
						2.2 {t('privacy.22')}
					</h4>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.221')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.222')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('privacy.223')}
						</li>
					</ul>
					{/* Section 2.3 */}
					<h4 className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2 mt-3">
						2.2 {t('privacy.23')}
					</h4>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.231')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.232')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('privacy.233')}
						</li>
					</ul>
					{/* Section 2.3 */}
					<h4 className="text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2 mt-3">
						2.3 {t('privacy.23')}
					</h4>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.231')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.232')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
							{t('privacy.233')}
						</li>
					</ul>

					{/* Section 3 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						3. {t('privacy.3')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.3text')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.31')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.32')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.33')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.34')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('privacy.35')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.3text2')}
					</p>

					{/* Section 4 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						4. {t('privacy.4')}
					</h3>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.41')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.42')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
							{t('privacy.43')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.4text')}
					</p>

					{/* Section 5 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						5. {t('privacy.5')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.5text')}
					</p>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.5text2')}
					</p>

					{/* Section 6 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						6. {t('privacy.6')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.6text')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.61')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.62')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.63')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.6text2')}
					</p>

					{/* Section 7 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						7. {t('privacy.7')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.7text')}
					</p>
					<ul className="list-disc pl-6">
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.71')}
						</li>
						<li className="text-sm sm:text-base text-slate-300 leading-relaxed mb-1 max-w-prose md:max-w-3xl">
							{t('privacy.72')}
						</li>
					</ul>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.7text2')}
					</p>

					{/* Section 8 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						8. {t('privacy.8')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-2 max-w-prose md:max-w-3xl">
						{t('privacy.8text')}
					</p>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.8text2')}
					</p>

					{/* Section 9 */}
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-2">
						9. {t('privacy.9')}
					</h3>
					<p className="text-justify text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-prose md:max-w-3xl">
						{t('privacy.9text')}
					</p>

				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Privacy;
