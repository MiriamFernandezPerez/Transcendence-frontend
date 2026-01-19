// import React from "react";
// import nexusIcon from "../assets/NexusNineIcon.png";

interface Separator {
	className?: string;
}

const Separator = () => {
	return (
		
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
				<div className="absolute top-[20%] left-0 w-full h-px bg-linear-to-r from-transparent via-brand-500 to-transparent blur-[1px]"></div>
				<div className="absolute bottom-[20%] left-0 w-full h-px bg-linear-to-r from-transparent via-brand-500 to-transparent blur-[1px]"></div>
				<div className="absolute top-0 right-0 w-125 h-125 bg-brand-600 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
			</div>
	);
};

export default Separator;
