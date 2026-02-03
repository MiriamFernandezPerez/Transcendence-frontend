import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUser, FaGamepad, FaEdit, FaTrophy, FaExclamationTriangle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import DashboardLayout from '../components/layouts/DashboardLayout';
import LoadingState from '../components/ui/LoadingState';
//import api from '../services/api';
//import { useAuth } from '../context/AuthContext';
import type { UserProfile } from '../models/User';


const Profile = () => {
	const { t } = useTranslation();
	
	/* 1. Get the username from the URL (if any) */
	const { username } = useParams<{ username: string }>();

	/* 2. Determine if we are viewing our own profile */
	// If no param, or param matches my username -> It's me
	// Simulacion con usuario mirindaw
	const currentAuthUser = "mirindaw";
	const isOwnProfile = !username || username.toLowerCase() === currentAuthUser.toLowerCase();

	/* Cuando tenga la BBDD las dos lineas anteriores serán estas */
	// const { user } = useAuth();
	// const isOwnProfile = !username || username.toLowerCase() === user?.username.toLowerCase();

	const [profileData, setProfileData] = useState<UserProfile | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	/* Helper to dinamics styles on wins or loss */
	const getMatchStyles = (result: 'win' | 'loss') => {
		const isWin = result === 'win';
		return {
			border: isWin ? 'bg-success' : 'bg-danger',
			badge: isWin
				? 'bg-success/10 text-success border border-success/20'
				: 'bg-danger/10 text-danger border border-danger/20'
		};
	};

	/* 3. Fetch Data Effect Simulation */
	useEffect(() => {
		const fetchProfile = async () => {
			setIsLoading(true);
			await new Promise(resolve => setTimeout(resolve, 600));

			/* MOCK DATA SIMULATION */
			// If viewing a friend, return friend data. If me, return my data.
			const targetUser = isOwnProfile ? "Miriam" : username;

			const mockData: UserProfile = {
				id:1,
				username: targetUser || "Unknown",
				email: isOwnProfile ? "miriam@student.42.fr" : undefined,
				avatar: "../../../public/assets/avatars/sorceress.png",
				stats: {
					wins: 42,
					losses: 12,
					gamesPlayed: 54,
					winRate: 77
				},
				history: [
					{ id: 1, opponent: "Ivan", result: 'win', score: "5 - 2", date: "2h ago" },
					{ id: 2, opponent: "Kevin", result: 'loss', score: "3 - 5", date: "1d ago" },
					{ id: 3, opponent: "David", result: 'win', score: "5 - 0", date: "3d ago" },
					{ id: 4, opponent: "Miriamsdsdsdsd", result: 'win', score: "5 - 0", date: "3d ago" },
				]
			};

			setProfileData(mockData);

			/* Simulation of error on profile load */
			//setProfileData(null);
			setIsLoading(false);
		};

		fetchProfile();
	}, [username, isOwnProfile]);

	/* useEffect real cuando tenga la BBDD */
// 	useEffect(() => {
//     const fetchProfile = async () => {
//         setIsLoading(true);
        
//         try {
//             // Petición Real, en vez del mockData anterior, aquí el backend debe devolver el JSON con la estructura exacta de la interfaz con los datos del usuario
//             const response = await api.get(`/users/${username || 'me'}/profile`);
            
//             // Guardar datos reales
//             setProfileData(response.data); 
            
//         } catch (error) {
//             console.error("Error fetching profile:", error);
//             // Manejo de errores real
//             setProfileData(null); 
//         } finally {
//             // Termina carga (sea éxito o error)
//             setIsLoading(false); 
//         }
//     };

//     fetchProfile();
// }, [username, isOwnProfile]);

	return (
		<DashboardLayout isCentered={false}>
			<div className="max-w-5xl mx-auto w-full animate-fade-in-up pb-20">

				{/* Conditional Render: Loading or Profile */}
				{isLoading ? (
					<LoadingState message={t('common.loading')} />
				) : profileData ? (
					<>
						{/* --- HEADER SECTION --- */}
						<div className="glass-panel p-8 mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">

							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

							{/* Avatar */}
							<div className="relative group">
								<div className="w-32 h-32 rounded-full border-4 border-dark-800 shadow-2xl overflow-hidden bg-dark-900 flex items-center justify-center">
									{profileData.avatar ? (
										<img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
									) : (
										<FaUser className="text-slate-600 w-7/12 h-7/12 object-cover" />
									)}
								</div>

							</div>


							{/* User Info */}
							<div className="flex-1 text-center md:text-left z-10">
								<h1 className="text-4xl font-bold text-white mb-2">
									{profileData.username}
								</h1>
								{isOwnProfile && (
									<p className="text-slate-400 text-sm mb-4 bg-dark-900/50 inline-block px-3 py-1 rounded-full border border-white/5">
										{profileData.email}
									</p>
								)}

								{/* Action Buttons */}
								<div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
									{isOwnProfile ? (
										<Link to="/edit_profile">
											<button className="btn-icon btn-secondary px-6 gap-2 text-sm font-bold">
												<FaEdit /> {t('profile.edit_profile')}
											</button>
										</Link>
									) : (
										<button className="btn-icon btn-primary px-6 gap-2 text-sm font-bold">
											<FaGamepad size={20} /> {t('dashboard.play')}
										</button>
									)}
								</div>
							</div>
						</div>

						{/* --- STATS GRID --- */}
						<h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
							<FaTrophy className="text-warning" /> {t('profile.stats')}
						</h3>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
							<StatBox label={t('profile.games_played')} value={profileData.stats.gamesPlayed} />
							<StatBox label={t('profile.wins')} value={profileData.stats.wins} color="text-success" />
							<StatBox label={t('profile.losses')} value={profileData.stats.losses} color="text-danger" />
							<StatBox label={t('profile.win_rate')} value={profileData.stats.winRate} color="text-brand-400" />
						</div>

						{/* --- MATCH HISTORY --- */}
						<h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
							<MdHistory className="text-brand-400" /> {t('dashboard.history')}
						</h3>

						{/* Responsive Table for Desktop, Cards to Mobile */}
						{/* Mobile View */}
						<div className="grid gap-4 lg:hidden">
							{profileData.history?.map((match) => {
								const styles = getMatchStyles(match.result);
								return (
									<div key={match.id} className="glass-panel p-1.5 flex flex-col gap-3 relative overflow-hidden">
										{/* Green background for wins and red for losses */}
										<div className={`absolute left-0 top-0 bottom-0 w-1 ${styles.border}`}></div>

										<div className="flex justify-between items-center px-2 md:px-8 w-full">
											{/* Oponent */}
											<div className="flex items-center gap-2">
												<div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-dark-800 flex items-center justify-center shrink-0">
													{profileData.avatar ? <img src={profileData.avatar} alt="Opponent" className="w-full h-full object-cover" /> : <FaUser className="text-slate-500" />}
												</div>
												<p className="text-white font-bold text-lg leading-none">{match.opponent}</p>
											</div>
											{/* Date */}
											<div className="flex items-center gap-1 text-xs text-slate-500 bg-black/20 px-1 py-1 rounded-md">
												{match.date}
											</div>
										</div>

										<div className="h-px bg-white/5 w-full"></div>

										<div className="flex justify-evenly items-center">
											{/* Badge Result */}
											<span className={`px-3 py-1 rounded text-xs font-black uppercase tracking-widest ${styles.badge}`}>
												{match.result}
											</span>
											{/* Score */}
											<span className="text-2xl font-mono font-bold text-white tracking-widest">
												{match.score}
											</span>
										</div>
									</div>
								);
		})}
						</div>

						{/* Desktop View */}
						<div className="hidden lg:block glass-panel overflow-hidden">
							<table className="w-full text-left text-sm text-slate-400">
								<thead className="bg-white/5 text-slate-200 uppercase text-xs font-bold">
									<tr className="text-center">
										<th></th>
										<th className="px-6 py-4">{t('profile.result')}</th>
										<th className="px-6 py-4">{t('profile.opponent')}</th>
										<th className="px-6 py-4">{t('profile.score')}</th>
										<th className="px-6 py-4">{t('profile.date')}</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-white/5">
									{profileData.history?.map((match) => {
										const styles = getMatchStyles(match.result);
										return (
										<tr key={match.id} className="hover:bg-white/5 transition-colors text-center relative group">
											<td className={`absolute left-0 top-0 bottom-0 w-1 transition-all group-hover:w-1.5 ${styles.border}`}>
											</td>
											<td className="px-6 py-4">
												<span className={`px-2 py-1 rounded text-xs font-bold ${styles.badge}`}>
													{match.result.toUpperCase()}
												</span>
											</td>
											<td className="px-6 py-4 font-medium text-white">
												<div className="flex items-center justify-start w-6/12 mx-auto gap-3">
													<div className="w-10 h-10 shrink-0 rounded-full border border-dark-800 bg-dark-900 flex items-center justify-center overflow-hidden">
														{profileData.avatar ? <img src={profileData.avatar} alt="Opponent" className="w-full h-full object-cover" /> : <FaUser className="text-slate-500 text-xs" />}
													</div>

													<div className="w-px h-8 bg-white/10 flex">

														<span className="ps-2 flex items-center" title={match.opponent}>{match.opponent}</span>
													</div>

												</div>

											</td>
											<td className="px-6 py-4 text-center font-mono text-white">
												{match.score}
											</td>
											<td className="px-6 py-4 text-center">
												{match.date}
											</td>
										</tr>
									);
								})}
								</tbody>
							</table>
						</div>
					</>
				) : (
					/* State error if profileData fails to load */
					<div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
						<div className="w-16 h-16 bg-danger-500/10 rounded-full flex items-center justify-center mb-4 border border-danger-500/20">
							<FaExclamationTriangle className="text-3xl text-danger-500" />
						</div>
						<h3 className="text-xl font-bold text-white mb-2">
							{t('profile.error_loading')}
						</h3>
						<p className="text-slate-400 max-w-md mb-6">
							{t('profile.error_msg')}
						</p>
						<button
							onClick={() => window.location.reload()}
							className="btn-secondary px-6 py-2 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors"
						>
							{t('profile.try_again')}
						</button>
					</div>
				)}
			</div>
		</DashboardLayout>
	);
};

/* --- StatBox Component --- */
interface StatBoxProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    color?: string;
}

const StatBox = ({ label, value, icon, color = "text-white" }: StatBoxProps) => (
    <div className="glass-panel p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
        <span className={`flex text-3xl font-black mb-1 ${color}`}>
            {value}
        </span>
        <span className="text-xs text-slate-400 uppercase tracking-wider font-bold flex items-center gap-2">
            {icon} {label}
        </span>
    </div>
);

export default Profile;