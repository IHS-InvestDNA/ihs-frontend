import React from 'react';
import ServiceHeroImage from "../../../assets/images/care-services.jpg";

const ServiceHero = () => {
	return (
		<div className="w-full pt-20">
			<div className="w-full md:h-[400px] h-[200px] bg-neutral-900/50 absolute">
				<img src={ServiceHeroImage} alt="" className="w-full h-full object-cover mix-blend-overlay"/>
			</div>

			<div className="flex flex-col justify-center items-center relative text-white max-w-[1240px] mx-auto md:py-48 py-20">
				<div className="px-4">
					<h2 className="md:text-3xl text-xl text-slate-300 uppercase text-center">Services</h2>
					<h3 className="md:text-5xl text-2xl font-semibold py-6 text-center">Care Services
					</h3>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;