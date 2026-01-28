import { type ReactNode, } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface DashboardLayoutProps {
    children: ReactNode;
    isCentered?: boolean;
}

const DashboardLayout = ({ children, isCentered = false }: DashboardLayoutProps) => {
    return (
        <div className={`
            min-h-screen w-full bg-dark-900 text-white font-sans overflow-hidden flex flex-col relative
            
            /* LÓGICA DE PADDING SUPERIOR (La clave del arreglo) */
            /* 1. Móvil: Siempre pt-28 para salvar el Navbar */
            pt-28
            
            /* 2. Desktop (md): Depende de isCentered */
            /* Si está centrado (Index), quitamos padding (pt-0) para que el justify-center use toda la pantalla */
            /* Si NO está centrado (Friends), forzamos pt-28 para que empiece debajo del Navbar */
            ${isCentered ? 'md:pt-0' : 'md:pt-28'}
        `}>

            <Navbar />

            {/* Main Content */}
            <main className={`
                flex-1 px-4 sm:px-6 relative z-10 flex flex-col 
                /* Ajuste de altura mínima: Restamos navbar solo si hay padding, si no, pantalla completa */
                ${isCentered ? 'min-h-screen' : 'min-h-[calc(100vh-112px)]'}
                
                /* Alineación del contenido */
                ${isCentered 
                    /* Mobile: Arriba / Desktop: Centro absoluto */
                    ? 'justify-start md:justify-center items-center' 
                    /* Siempre Arriba (Friends, Profile...) */
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