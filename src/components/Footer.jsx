import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"



const Footer = () => {
	return (
		<footer data-aos="fade-up" className="relative bg-orange-50 pt-8 pb-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div data-aos="fade-down" className="w-full lg:w-6/12 px-4">
						<h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
						<h5 className="text-lg mt-0 mb-2 text-blueGray-600">
							Find us on any of these platforms, we respond 1-2 business days.
						</h5>
						<div className="mt-6 flex md:justify-start justify-center lg:mb-0 mb-6">
							<button className="transition-all bg-white text-lightBlue-400 border-none hover:bg-orange-400 shadow-lg h-14 flex items-center justify-center hover:color-white align-center hover:text-white rounded-full outline-none mr-2" type="button">
								<FaTwitter className="" />
							</button>
							<button className="transition-all bg-white border-none hover:bg-orange-400 shadow-lg h-14 flex items-center justify-center hover:color-white align-center hover:text-white rounded-full outline-none mr-2" type="button">
								<FaFacebook />
							</button>
							<button className="transition-all bg-white text-lightBlue-400 border-none hover:bg-orange-400 shadow-lg h-14 flex items-center justify-center hover:color-white align-center hover:text-white rounded-full outline-none mr-2" type="button">
								<FaInstagram />
							</button>
							<button className="transition-all bg-white text-lightBlue-400 border-none hover:bg-orange-400 shadow-lg h-14 flex items-center justify-center hover:color-white align-center hover:text-white rounded-full outline-none mr-2" type="button">
								<FaGithub />
							</button>
						</div>
					</div>
					<div className="w-full lg:w-6/12 px-4">
						<div data-aos="fade-right" className="flex flex-wrap items-top mb-6">
							<div className="w-full mt-4 lg:w-4/12 flex flex-col items-center px-4 ml-auto">
								<span className="flex flex-col uppercase md:items-start text-xl font-semibold mb-2">Useful Links</span>
								<ul className="list-unstyled flex flex-col md:items-start items-center justify-center">
									<Link to="/home">
										<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Blog</li>
										<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Github</li>
										<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Free Products</li>
										<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">About Us</li>
									</Link>
								</ul>
							</div>
							<div className="w-full mt-4 lg:w-5/12 flex flex-col items-center px-4">
								<span className="flex flex-col justify-center md:items-start items-center uppercase text-blueGray-500 text-xl font-semibold mb-2">Other Resources</span>
								<ul className="list-unstyled flex flex-col md:items-start justify-center items-center">
									<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">MIT license</li>
									<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Terms & Conditions</li>
									<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Provicy Policy</li>
									<li className="text-lg cursor-pointer font-semibold hover:text-orange-500">Contact Us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-4 border-blueGray-300" />
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-2xl text-blueGray-500 font-semibold py-1">
							Copyright © <span id="get-current-year">2023</span>
							<Link to="https://github.com/vaibhav-0902" className="text-blueGray-500 hover:text-orange-500" target="_blank">
								<p className="text-blueGray-500 hover:text-blueGray-800">Vaibhav Waghela</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Footer;