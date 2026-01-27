import React from 'react';

interface DashboardCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactElement;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

const DashboardCard = ({ title, subtitle, icon, onClick, variant = 'secondary' }: DashboardCardProps) => {
    
    /* Styles */ 
    const baseStyles = "relative group flex items-center gap-5 p-6 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02] cursor-pointer overflow-hidden";
    
    /* Styles based on variant */
    const styles = variant === 'primary' 
        ? "bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400/50 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)]"
        : "bg-dark-800/60 backdrop-blur-md border-white/10 hover:border-brand-500/50 hover:bg-dark-800 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]";

    const iconColor = variant === 'primary' ? 'text-white' : 'text-brand-500';

    return (
        <button onClick={onClick} className={`${baseStyles} ${styles} text-left w-full h-32 md:h-40`}>
            
            <div className={`p-4 ${iconColor} shrink-0 transition-transform group-hover:scale-110 duration-300`}>
                {React.cloneElement(icon as React.ReactElement<any>, { size: 50 })}
            </div>
            
            <div className="flex flex-col z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-sans">
                    {title}
                </h3>
                <p className={`text-sm md:text-base font-medium ${variant === 'primary' ? 'text-blue-100' : 'text-slate-400'}`}>
                    {subtitle}
                </p>
            </div>
        </button>
    );
};

export default DashboardCard;