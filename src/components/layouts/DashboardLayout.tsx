import { type ReactNode, } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface DashboardLayoutProps {
    children: ReactNode;
    isCentered?: boolean;
}

const DashboardLayout = ({ children, isCentered = false }: DashboardLayoutProps) => {
    return (
        /* Padding top added to compensate for fixed Navbar on mobile */
        <div className="min-h-screen w-full bg-dark-900 text-white font-sans overflow-hidden flex flex-col relative pt-28 md:pt-0">

            <Navbar />

            {/* RESPONSIVE LOGIC:
               - justify-start: On mobile, start at the top.
               - md:justify-center: If isCentered is true, center on desktop.
            */}
            <main className={`
                flex-1 px-4 sm:px-6 relative z-10 flex flex-col min-h-[calc(100vh-96px)]
                ${isCentered 
					/* Mobile: Top / Desktop: Center */
                    ? 'justify-start md:justify-center items-center' 
					/* Always Top */
                    : 'justify-start items-stretch'                  
                }
            `}>
                <div className="max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DashboardLayout;