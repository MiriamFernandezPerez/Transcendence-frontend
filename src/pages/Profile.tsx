import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUser, FaGamepad, FaEdit, FaTrophy, FaGamepad as FaGames } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import DashboardLayout from '../components/layouts/DashboardLayout';

/* Defines user data structure for profile */
interface UserProfile {
    username: string;
    email?: string; // Only visible if it's my profile
    avatar?: string;
    stats: {
        wins: number;
        losses: number;
        gamesPlayed: number;
        winRate: string;
    };
    history: {
        id: number;
        opponent: string;
        result: 'win' | 'loss';
        score: string;
        date: string;
    }[];
}

const Profile = () => {
    const { t } = useTranslation();
    
    /* 1. Get the username from the URL (if any) */
    const { username } = useParams<{ username: string }>();
    
    /* 2. Determine if we are viewing our own profile */
    // If no param, or param matches my username -> It's me
    // TODO: Connect with AuthContext real user
    const currentAuthUser = "mirindaw"; 
    const isOwnProfile = !username || username.toLowerCase() === currentAuthUser.toLowerCase();

    const [profileData, setProfileData] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    /* 3. Fetch Data Effect */
    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 600)); // Simulating network

            /* MOCK DATA SIMULATION */
            // If viewing a friend, return friend data. If me, return my data.
            const targetUser = isOwnProfile ? "Miriam (You)" : username;

            const mockData: UserProfile = {
                username: targetUser || "Unknown",
                email: isOwnProfile ? "miriam@student.42.fr" : undefined,
                avatar: "https://i.pravatar.cc/150?u=Miriam", // Uncomment to test image
                stats: {
                    wins: 42,
                    losses: 12,
                    gamesPlayed: 54,
                    winRate: "77%"
                },
                history: [
                    { id: 1, opponent: "Ivan", result: 'win', score: "5 - 2", date: "2h ago" },
                    { id: 2, opponent: "Kevin", result: 'loss', score: "3 - 5", date: "1d ago" },
                    { id: 3, opponent: "David", result: 'win', score: "5 - 0", date: "3d ago" },
                ]
            };

            setProfileData(mockData);
            setIsLoading(false);
        };

        fetchProfile();
    }, [username, isOwnProfile]);

    if (isLoading) {
        return (
            <DashboardLayout isCentered={true}>
                <div className="text-slate-400 animate-pulse text-xl">
                    {t('common.loading')}
                </div>
            </DashboardLayout>
        );
    }

    if (!profileData) return null;

    return (
        <DashboardLayout isCentered={false}>
            <div className="max-w-5xl mx-auto w-full animate-fade-in-up pb-20">

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
                                <FaUser className="text-slate-600 text-5xl" />
                            )}
                        </div>
                        {/* Status Indicator (Hardcoded online for demo) */}
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-success border-4 border-dark-800 rounded-full"></div>
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
                                <button className="btn-icon btn-secondary px-6 gap-2 text-sm font-bold">
                                    <FaEdit /> {t('profile.edit_profile')}
                                </button>
                            ) : (
                                <>
                                    <button className="btn-icon btn-primary px-6 gap-2 text-sm font-bold">
                                        <FaGamepad /> {t('dashboard.play')}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- STATS GRID --- */}
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaTrophy className="text-warning" /> {t('profile.stats')}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <StatBox label={t('profile.games_played')} value={profileData.stats.gamesPlayed} icon={<FaGames />} />
                    <StatBox label={t('profile.wins')} value={profileData.stats.wins} color="text-success" />
                    <StatBox label={t('profile.losses')} value={profileData.stats.losses} color="text-danger" />
                    <StatBox label={t('profile.win_rate')} value={profileData.stats.winRate} color="text-brand-400" />
                </div>

                {/* --- MATCH HISTORY --- */}
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MdHistory className="text-brand-400" /> {t('dashboard.history')}
                </h3>

                <div className="glass-panel p-1 overflow-hidden">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-white/5 text-slate-200 uppercase text-xs font-bold">
                            <tr>
                                <th className="px-6 py-4">Result</th>
                                <th className="px-6 py-4">Opponent</th>
                                <th className="px-6 py-4 text-center">Score</th>
                                <th className="px-6 py-4 text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {profileData.history.map((match) => (
                                <tr key={match.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                                            match.result === 'win' 
                                            ? 'bg-success/10 text-success border border-success/20' 
                                            : 'bg-danger/10 text-danger border border-danger/20'
                                        }`}>
                                            {match.result.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-white">
                                        {match.opponent}
                                    </td>
                                    <td className="px-6 py-4 text-center font-mono text-white">
                                        {match.score}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {match.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </DashboardLayout>
    );
};

/* --- Internal Component for Stat Box --- */
const StatBox = ({ label, value, icon, color = "text-white" }: { label: string, value: string | number, icon?: React.ReactNode, color?: string }) => (
    <div className="glass-panel p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
        <span className={`text-3xl font-black mb-1 ${color}`}>
            {value}
        </span>
        <span className="text-xs text-slate-400 uppercase tracking-wider font-bold flex items-center gap-2">
            {icon} {label}
        </span>
    </div>
);

export default Profile;