import { useTranslation } from 'react-i18next';
import { FaUserFriends, FaUser, FaHistory } from "react-icons/fa";
import { GiCardPlay } from "react-icons/gi";
import DashboardLayout from '../components/layouts/DashboardLayout';
import DashboardCard from '../components/ui/DashboardCard';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const user = { username: "Miriam" }; 

    return (
        <DashboardLayout isCentered={true}>
            
            <div className="mb-10">
                <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-4 text-white drop-shadow-lg justify-center md:justify-start">
                    <span className="text-2xl md:text-4xl animate-wave">👋</span> 
                    {/* Using CSS utility for gradient */}
                    {t('dashboard.hello')}, <span className="text-gradient-nexus">{user.username}</span>
                </h1>
                <p className="text-slate-400 mt-2 ml-1 text-lg text-center md:text-start md:justify-start">{t('dashboard.ready')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 animate-fade-in-up">
                {/* Play Card (Primary) */}
                <Link to="/game">
                    <DashboardCard 
                        title={t('dashboard.play')} 
                        subtitle={t('dashboard.play')}
                        icon={<GiCardPlay />}
                        variant="primary"
                        onClick={() => navigate('/game')}
                    />
                </Link>

                <Link to="/friends">
                    <DashboardCard 
                        title={t('dashboard.friends')}
                        subtitle="Online: 4"
                        icon={<FaUserFriends />}
                        onClick={() => navigate("/friends")}
                    />
                </Link>

                <Link to="/profile">
                    <DashboardCard 
                        title={t('dashboard.profile')} 
                        subtitle={t('dashboard.profile_info')}
                        icon={<FaUser />}
                        onClick={() => navigate("/profile")}
                    />
                </Link>

                <DashboardCard 
                    title={t('dashboard.history')} 
                    subtitle={t('dashboard.history_info')}
                    icon={<FaHistory />}
                    onClick={() => navigate("/history")}
                />
            </div>
        </DashboardLayout>
    );
};

export default Index;