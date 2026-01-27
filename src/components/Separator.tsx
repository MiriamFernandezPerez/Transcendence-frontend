// import React from "react";
// import nexusIcon from "../assets/NexusNineIcon.png";

interface Separator {
    className?: string;
}

const Separator = () => {
    return (
        
            <>
                {/* Changed bg-linear-to-r to bg-gradient-to-r (Standard Tailwind) */}
                <div className="absolute top-28 md:top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-[1px] opacity-70"></div>
            
                <div className="absolute bottom-24 md:bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-[1px] opacity-70"></div>
            </>
    );
};

export default Separator;