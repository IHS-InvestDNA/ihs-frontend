import React from 'react';
import AboutHeroImage from "../assets/images/about.png";

const AboutHero = () => {
	return (
		<div className="w-full pt-28">
			<div className="w-full md:h-[400px] h-[300px] bg-neutral-900/50 absolute">
				<img src={AboutHeroImage} alt="" className="w-full h-full object-cover mix-blend-overlay"/>
			</div>

			<div className="flex flex-col justify-center items-center relative text-white max-w-[1240px] mx-auto md:py-48 py-44">
				<div className="px-4">
					<h2 className="md:text-3xl text-2xl text-slate-300 uppercase text-center">About Us</h2>
				</div>
				<div>
					<h3 className="md:text-5xl text-4xl font-semibold py-6 text-center">Learn more about IHS.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;