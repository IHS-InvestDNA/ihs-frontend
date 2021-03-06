import React from 'react';
import {ChevronLeftIcon, ClipboardCheckIcon} from "@heroicons/react/outline";
import {Link, useNavigate} from "react-router-dom";

const ViewAppointment = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:p-20 md:p-10 p-3">
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate("/appointments")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Appointments</p>
			</button>
			<div className="flex">
				<div className="flex-1">

					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<ClipboardCheckIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Appointments Details</h3>
						</div>

						<Link to="/appointments/review" className="text-gray-600 hover:text-gray-700">
							<h3 className="text-xl md:px-8 px-3 hover:underline">Review</h3>
						</Link>

					</div>

					<div className="mt-10 text-gray-600 md:text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Beneficiary: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">John Doe </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Service: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">Drugs Administration </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Date: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">22 September, 2022 </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Time: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">12:00 PM </p>
						</div>

						{/*	Review */}
						<div>
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Review: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">Exceptional service by the health care worker assigned to the home visit appointment. </p>
							</div>
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Rating: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">5 Stars </p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewAppointment;